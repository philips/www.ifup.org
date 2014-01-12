{
	"disqus_url": "http://www.ifup.org/2011/11/29/cheekh-growl-from-your-vm-or-desktop/index.html",
	"disqus_title": "cheekh: growl from your vm or desktop",

	"Title": "cheekh: growl from your vm or desktop",
	"Pubdate": "2011-11-29",
	"Keywords": ["linux", "python", "vagrant", "vm", "growl"],
	"Topics": [
		"Development"
	],

	"Slug": "cheekh-growl-from-your-vm-or-desktop",
	"Section": "post",
}

Desktop notifications are great for notifying you about long running
processes like tests or compiles. But, at work we use
[Vagrant][vagrant], so alot of compiles and tests take place inside of a
virtual machine. And that makes it a bit tricky to dish out helpful
desktop notifications.

<img class="alignleft" src="/images/cheekh.png" alt="Cheekh logo via openclipart" />

[vagrant]: http://vagrantup.com

Growl is a desktop notification system for Mac and it does two helpful
things to make it possible to push notifications from a virtual machine.
First, it has a network protocol so you can send notifications via TCP.
Second, it advertises the network service via [mDNS][mdns].  Awesome!

[mdns]: http://en.wikipedia.org/wiki/Multicast_DNS

Using these two features I wrote [cheekh][cheekh] which can send a
notification from either the host or guest machine. If no Growl server
is found it quickly times-out.

[cheekh]: http://github.com/philips/cheekh

tl;dr you can find a quick [screencast here][cheekh-video].

[cheekh-video]: /videos/cheekh.mov

