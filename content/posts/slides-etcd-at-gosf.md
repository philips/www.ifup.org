{
	"disqus_url": "http://www.ifup.org/posts/slides-etcd-at-gosf/",
	"disqus_title": "Slides: etcd at GoSF",

	"Title": "Video: etcd at GoSF",
	"Pubdate": "2014-01-18",
	"Keywords": [
		"go",
		"etcd",
		"coreos"
	],
	"Topics": [
		"Development"
	],

	"Slug": "slides-etcd-at-gosf",
	"Section": "post",
}
Last week I gave a talk at the San Francisco Go meetup ([GoSF][gosf]). The
event was great and has about 200 Go Gophers in attendance.

Giving the talk was great because it made me realize how much we have
accomplished on etcd since my last talk in October. The audience was mostly
curious about how it differs from Zookeeper, how master elections work, and how
we were testing various failure modes. A great suggestion from Brad Fitz was
to use a mock of net.Conn to test various network problems. I hope to start
executing on that soon.

<iframe width="560" height="315" src="//www.youtube.com/embed/BxkJRKYkUc4?start=532" frameborder="0" allowfullscreen></iframe>

{{% speakerdeck 42f883e060f801319dd43a22f70921ad %}}

[gosf]: http://www.meetup.com/golangsf/events/146084182/
