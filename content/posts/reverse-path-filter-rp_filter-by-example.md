{
	"disqus_url": "http://www.ifup.org/2011/02/03/reverse-path-filter-rp_filter-by-example/index.html",
	"disqus_title": "reverse path filter (rp_filter) by example",

	"Title": "reverse path filter (rp_filter) by example",
	"Pubdate": "2011-02-03",
	"Keywords": ["rp_filter", "linux", "kernel", "networking"],
	"Topics": [
		"Development"
	],

	"Slug": "reverse-path-filter-rp_filter-by-example",
	"Section": "post",
}

Recently, I ran into an rp_filter change for all Kernels after 2.6.31.
So read along for an explanation of both the sysctl change and a
practical example of rp_filter usage.

Lets say you had the following entry in your /etc/sysctl.conf 

	net.ipv4.conf.all.rp_filter = 1

with the intention of turning on [reverse path
filtering](http://git.kernel.org/?p=linux/kernel/git/torvalds/linux-2.6.git;a=blob;f=Documentation/networking/ip-sysctl.txt;hb=HEAD#l844)
for all interfaces. Well you didn't get your wish- rp_filter remained
disabled if you are running a Kernel older than 2.6.31.

This could come as a suprise if you upgrade your Kernel and have a
system relying on rp_filter being disabled or enabled (e.g.  multicast
routing, multi-homed servers). If you have a single-homed unicast server
setups this change will probably go unnoticed however.


The fix was implemented upstream in
[v2.6.31](http://git.kernel.org/?p=linux/kernel/git/torvalds/linux-2.6.git;a=commit;h=27fed4175acf81ddd91d9a4ee2fd298981f60295)
and the basic issue was that each individual interface has an rp_filter
setting which defaulted to 0 and the interface setting overrides the
"all interface setting" since they were AND'd together.

Simple Example
==============

This is a simple example to show how rp_filter will filter packets in
the three modes: 0 disabled, 1 strict and 2 loose.

	Client A - 192.168.2.10 - connected to router via eth0

	Router
	  eth0   - 192.168.2.150
	   routes - 192.168.2.0/24
	  eth1	 - 10.42.43.1
	   routes - 10.42.43.0/24

	_Note: No default route_

	Client C - 10.42.43.50 - connected to router via eth1

With this setup and rp_filter on the router set to "loose mode" (2) a
packet on eth0 from 1.2.3.4 to 10.42.43.50 will be blocked. With
rp_filter on the router set to "strict mode" (1) a packet on eth0 from
source address 10.42.43.2 will be blocked. When set to "disabled" (0)
both packets would go through.

Testing 
========

Lets try this out with some real systems. You could do this with some
virtual machines or three physical hosts. For example Client A could be
a workstation, the Router could be a laptop with eth0 connected to
Client A and an ad-hoc wifi networking connecting to Client C.

Client A

Routing setup for the router.

	$ route
	Kernel IP routing table
	Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
	10.42.43.0      *               255.255.255.0   U     2      0        0 eth1
	192.168.2.0     *               255.255.255.0   U     0      0        0 eth0
	loopback        *               255.0.0.0       U     0      0        0 lo


Script that will be used to reset rp_filter on our incoming route
device.

	$ cat set-rp_filter.sh
	find /proc/sys -name rp_filter -exec sh -c "echo $1 > {}" \;
	ifconfig eth0 down
	ifconfig eth0 up
	route del default

Client C
