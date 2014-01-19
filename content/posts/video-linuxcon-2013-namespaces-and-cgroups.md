{
	"disqus_url": "http://www.ifup.org/posts/video-modern-linux-server-with-containers/",
	"disqus_title": "Video: ",

	"Title": "Video: Modern Linux Server with Containers",
	"Pubdate": "2013-10-01",
	"Keywords": [
		"cgroups",
		"namespaces",
		"lxc",
		"nsenter",
	],
	"Topics": [
		"Development"
	],

	"Slug": "video-modern-linux-server-with-containers",
	"Section": "post",
}

At LinuxCon 2013 I gave a talk that dissects "Linux Containers" into its
component parts in the Kernel: cgroups and namespaces. The talk shows how
cgroups act as the "accounting bean counter" and namespaces as the "castle
walls" that isolate processes from each other.

If you are already familiar with the basics of namespaces and cgroups I show
off some tools like `nsenter`, `docker`, and `systemd-nspawn`. Skip to the end
to catch the demos.

<iframe width="560" height="315" src="//www.youtube.com/embed/ZD7HDrtkZoI" frameborder="0" allowfullscreen></iframe>

The full slides are availble on [slide deck][slide deck] and mirrored as a [pdf here][pdf].

[slide deck]: https://speakerdeck.com/philips/modern-linux-server-with-containers
[pdf]: /slides/Modern_Linux_Server_with_Containers.pdf
