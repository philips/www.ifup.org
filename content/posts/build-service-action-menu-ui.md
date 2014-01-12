{
	"disqus_url": "http://www.ifup.org/2011/02/24/build-service-action-menu-ui/index.html",
	"disqus_title": "Build Service Action Menu UI",

	"Title": "Build Service Action Menu UI",
	"Pubdate": "2011-02-24",
	"Keywords": ["linux", "obs", "build service", "opensuse"],
	"Topics": [
		"Development"
	],

	"Slug": "build-service-action-menu-ui",
	"Section": "post",
}

[Last week][1] I wrote a few patches to improve the UI of the build
service. The first of these patches were accepted but the removal of the
Actions menu wasn't as well liked. This was the proposal:

[1]: /2011/02/17/fixing-open-build-service-ui-gripes/

### Current Interface

The current javascript pop out menu is hard to discover and not really
necessary given how much space is available in the UI.

![Before](/images/obs-project-before.png)

### My Suggested Patch

OBS has other horizontal controls and the vertical space to handle an
inline list so I submitted this layout in my patches.

![Horizontal controls](/images/obs/control-horizontal.png)


However, in the merge request Sascha [suggested an alternative][2] which
I have tried out and taken screenshots of below (ignore the margin
issues, I need to fix the css for the bento showleft class which breaks
the 960 grid layout).

[2]: http://gitorious.org/opensuse/build-service/merge_requests/9

### Sascha's Suggestion

What I don't like about this is that if you visit a project or package
with a long description the really useful information about failures and
the controls are below the fold and a scroll wheel away.

![Bottom controls](/images/obs/control-bottom.png)

### Controls on Top

I could move the controls to the top above the description but this
feels like it takes up a lot of space.

![Controls on top](/images/obs/control-top.png)

What do people think? I still feel like the horizontal layout is the
best option but some more feedback would be helpful.
