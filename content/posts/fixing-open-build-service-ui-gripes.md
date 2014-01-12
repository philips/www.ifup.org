{
	"disqus_url": "http://www.ifup.org/2011/02/17/fixing-open-build-service-ui-gripes/index.html",
	"disqus_title": "Fixing openSUSE Build Service UI Gripes",

	"Title": "Fixing openSUSE Build Service UI Gripes",
	"Pubdate": "2011-02-17",
	"Keywords": ["linux"],
	"Topics": [
		"Development"
	],

	"Slug": "fixing-open-build-service-ui-gripes",
	"Section": "post",
}

The openSUSE Build Service is the tool that openSUSE developers use to
build the packages that make up the distro. To the regular openSUSE user
and contributor it does its job well. However, anyone who has spent an
extensive amount of time with it have found a few sharp corners.
[Sankar][1] is trying to fix some of those corners by writing a new
client, which looks like fun.

But, I think with some minor tweaks we can get the web ui in better
condition.

So, I started off by writing [4 patches][2] that fix the couple of
issues that I find most annoying.

Issue #1- lots of clicks to get to download URL for a repo

*Before*

![Before](/images/obs-repo-before.png)


*After*

![After](/images/obs-repo-after.png)

Issue #2- "Actions" menu on package and project page isn't very friendly
and those pages are mostly blank anyways. Show me the buttons! :)

*Before*

![Before](/images/obs-project-before.png)

*After*

![After](/images/obs-project-after.png)

If you have other things that you think should be fixed leave a comment
below and I will try to fix them.

Michal Marek has suggested making the breadcrumbs that are colon
seperated into individual links to each subproject.  I am working on
that next.

[1]: http://psankar.blogspot.com/2011/02/introducing-gosc-graphical-client-for.html
[2]: http://gitorious.org/~philips/opensuse/philipss-build-service/commits/master
