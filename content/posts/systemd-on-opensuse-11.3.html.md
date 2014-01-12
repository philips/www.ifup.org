{
	"disqus_url": "http://www.ifup.org/2010/07/22/systemd-on-opensuse-11.3/index.html",
	"disqus_title": "systemd on openSUSE 11.3",

	"Title": "systemd on openSUSE 11.3",
	"Pubdate": "2010-07-22",
	"Keywords": ["systemd", "opensuse", "break"],
	"Topics": [
		"Development"
	],

	"Slug": "systemd-on-opensuse-11.3",
	"Section": "post",
}
 
<p><em>WARNING: </em> this could cause your machine to stop booting,
experienced Linux admins only. :)</p>

<p><a href="http://www.0pointer.de/blog/projects/systemd.html">Systemd</a> is a
new init system being written by Lennart, Kay and many others. If you want to
give it a try on openSUSE 11.3 or openSUSE Factory follow these steps to get it
all installed.</p>

<ul>
<li>su</li>
<li># Add the Factory repo for dbus upgrade</li>
<li> zypper ar http://download.opensuse.org/factory/repo/oss/  Factory </li>
<li> zypper mr -p 100 Factory</li>
<li># Add Kay&#39;s repo for systemd install</li>
<li> zypper ar http://download.opensuse.org/repositories/home:/kay_sievers/openSUSE_Factory_standard/home:kay_sievers.repo</li>
<li> zypper mr -n systemd home_kay_sievers</li>
<li> zypper mr -p 100 systemd</li>
<li># Install new dbus and then systemd</li>
<li> zypper install -r Factory dbus-1</li>
<li> zypper install -r home_kay_sievers udev vala systemd</li>
</ul>

<p>At this point systemd is installed in parallel with systemvinit. To actually
use systemd as your init reboot your machine and append the following to your
kernel command line arguments at the grub menu:</p>

<p><code>init=/bin/systemd</code></p>

<p>That it! If things break try some of the <a
href="http://www.freedesktop.org/wiki/Software/systemd">Documentation</a>.</p>

<p>If you want to expand this article visit the 
<a href="http://en.opensuse.org/Systemd">wiki page</a></p>
