{
	"disqus_url": "http://www.ifup.org/2010/10/31/ghar-managing-your-home-in-git/index.html",
	"disqus_title": "ghar: managing your $HOME in git",

	"Title": "ghar: managing your $HOME in git",
	"Pubdate": "2010-10-31",
	"Keywords": ["ghar", "git", "HOME"],
	"Topics": [
		"Development"
	],

	"Slug": "ghar-managing-your-home-in-git",
	"Section": "post",
}

<a href="https://secure.wikimedia.org/wikipedia/en/wiki/Piya_Ka_Ghar">
<img class="alignleft" src="/images/ghar.jpg" alt="I have never seen this show fwiw" />
</a>

For awhile I have struggled with rsyncing dotfiles between my
development machines, laptop and workstation. As a Kernel developer I
usually have one or more machines in a half broken state so being able
to continue work in a familiar environment on one of the working ones is
important.

A year ago Gavin, Graham and I worked up a plan to manage and sync home
directory dotfiles with git. But, unlike other solutions we didn't want
everything in one big git repo. Why? For example on a remote build
machine I don't want my abook synced over but I do want my git and
vimrc. Our original implementation didn't work out, as I explain below,
but my new rewrite of our idea is working great.

Check it out:
 
ghar can help you manage your $HOME in git using a collection of git
repos seperated by topic or privacy. For example if you work on a
variety of machines and want to share your .emacs on github but not your
.ssh then ghar is for you.

#### INSTALL
	$ git clone git://ifup.org/philips/ghar.git
	$ export PATH=$PATH:`pwd`/ghar/bin/ # You may wish to make this permanent

#### Getting Started
	$ cd ghar
	$ mkdir devel
	$ cd devel
	$ git init
	$ mv ~/.vimrc .
	$ git add .vimrc
	$ git commit -m "vimrc: initial commit"
	$ ghar install
	  devel
	  installed /home/philips/.vimrc
	$ ghar install --status
	  devel
	  ok /home/philips/.vimrc

#### Adding External Repos
	# While in the base of the ghar directory
	$ ghar add git://github.com/robbyrussell/oh-my-zsh.git oh-my-zsh
	$ ghar install
	  oh-my-zsh
	  installed /home/philips/.oh-my-zsh

#### Thanks

These two chaps helped me on the original bash implementation. However,
our original plan of attack ended up being too unwieldy as it used the
--git-dir directive to do the magic instead of symlinks.

Graham Forest, Gavin McQuillan

Have fun everyone :) Fork me on
[github](http://github.com/philips/ghar).
