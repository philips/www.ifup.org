{
	"disqus_url": "http://www.ifup.org/2010/07/15/bandar---patch-monkey-tools-for-mutt/index.html",
	"disqus_title": "bandar - Patch monkey tools for mutt",

	"Title": "bandar - Patch monkey tools for mutt",
	"Pubdate": "2010-07-15",
	"Keywords": ["git", "mutt"],
	"Topics": [
		"Development"
	],
	"Slug": "bandar: patch-monkey-tools-for-mutt",
	"Section": "post",
}

<p>I was looking at a way of taking patches from mailing lists and importing
them into my devel tree with quilt. Thankfully Greg KH had some <a href="ftp://ftp.kernel.org/pub/linux/kernel/people/gregkh/gregkh-2.6/scripts/">scripts</a>
already and we both cleaned them up a bit. The result is Bandar!</p>
 
<a href="http://github.com/philips/bandar">Bandar</a> is a simple set of
scripts to integrate mutt/quilt/etc into a nice workflow:

<ul>
	<li>Review patch in mutt</li>
	<li>Press key</li>
	<li>Patch opens up in editor for editing</li>
	<li>Close your editor and apply patch to tree</li>
</ul>
