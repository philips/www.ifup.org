{
	"disqus_url": "http://www.ifup.org/2009/02/07/the-right-tool-for-the-job-git-stitch-repo/index.html",
	"disqus_title": "The Right Tool for the Job: git-stitch-repo ",

	"Title": "The Right Tool for the Job: git-stitch-repo ",
	"Pubdate": "2009-02-07",
	"Topics": [
		"Development"
	],

	"Slug": "the-right-tool-for-the-job-git-stitch-repo",
	"Section": "post",
}
I maintain the acl and attr packages for SuSE and I was bitten by a bug twice last month because these two packages both have a copy of a utility library called libmisc. In summary: I fixed the acl version of libmisc but forgot to copy the patch over and check-in the same fix for attr. Needless to say a user filed a bug a few weeks later against attr too. Doh.

The root of the problem isn't my incompetence, naturally, it is the fact that these two utilities duplicate code instead of sharing. ;)

Yesterday, Christoph Hellwig moved these packages from CVS at SGI to GIT at kernel.org.  With the code available via GIT I now had an opportunity to fix the libmisc duplication problem. Initially it wasn't clear how to merge the two histories of these projects together. But, with a bit of Googling I found a great little utility called <a href="http://search.cpan.org/~book/Git-FastExport-0.07/script/git-stitch-repo">git-stitch-repo</a> that is designed for exactly that. Here is how I made it happened:

{% highlight bash %}
git clone git://git.kernel.org/pub/scm/fs/xfs/attr-dev.git
git clone git://git.kernel.org/pub/scm/fs/xfs/acl-dev.git
mkdir acl-attr-dev
cd acl-attr-dev/
git init
git-stitch-repo ../acl-dev:acl ../attr-dev:attr | git fast-import
git checkout master-A
git pull . master-B
git branch -d master-A 
git branch -d master-B
git checkout -b libmiscmerge
{% endhighlight %}

<a href="http://ifup.org/git/?p=acl-attr-dev.git;a=commit;h=e540ad31395dfd7e4f07540294a0c52fd8e4021a">hack..hack..hack</a>

{% highlight bash %}
git checkout master
git pull . libmiscmerge
{% endhighlight %}

And the result is the merged <a href="http://ifup.org/git/?p=acl-attr-dev.git">acl-attr-dev.git</a>. Neat!
