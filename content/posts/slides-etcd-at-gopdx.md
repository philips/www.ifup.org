{
	"disqus_url": "http://www.ifup.org/posts/slides-etcd-at-gopdx/",
	"disqus_title": "Slides: etcd at Go PDX",

	"Title": "Slides: etcd at Go PDX",
	"Pubdate": "2014-02-25",
	"Keywords": [
		"go",
		"etcd",
		"coreos"
	],
	"Topics": [
		"Development"
	],

	"Slug": "slides-etcd-at-gopdx",
	"Section": "post",
}
Last week I gave a talk at the PDX Go meetup ([Go PDX][gopdx]). The
presentation is a refinement on the talk I gave last month at GoSF but contains
mostly the same content.

Several people in the audience had some experience with etcd already so it was
great to hear their feedback on the project as a whole. The questions included
partition tolerance and scaling properties, use cases and general design. It
was a smart crowd and it was great to meet so many PDX Gophers.

**Resources**

etcd:

- https://github.com/coreos/etcd
- https://github.com/coreos/etcdctl
- https://github.com/coreos/go-etcd
- Test cluster script: https://github.com/coreos/etcd/blob/master/scripts/test-cluster

Raft:

- http://blog.gopheracademy.com/writing-a-distributed-system-library
- http://thesecretlivesofdata.com/raft/

{{% speakerdeck 0faef62080300131bfbc3a1c3696f48b %}}

[gopdx]: https://groups.google.com/forum/#!forum/go-pdx
