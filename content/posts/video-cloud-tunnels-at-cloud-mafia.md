{
	"disqus_url": "http://www.ifup.org/2012/10/11/video:-cloud-tunnels-@-cloud-mafia/index.html",
	"disqus_title": "Video: Cloud Tunnels at Cloud Mafia",

	"Title": "Video: Cloud Tunnels at Cloud Mafia",
	"Pubdate": "2012-10-11",
	"Keywords": [
		"networking",
		"ethernet",
		"cloud",
		"vxlan",
		"nvgre",
	],
	"Topics": [
		"Development"
	],

	"Slug": "video-cloud-tunnels-at-cloud-mafia",
	"Section": "post",
}
Building software defined networks for cloud computing has been a hot
topic around the industry in the last year or so. There are blossoming
open source projects, shiny new protocols and a few notable
acquisitions.

At a recent Cloud Mafia meetup I gave a talk on the new emerging
tunneling protocols that are being proposed to support cloud networking.
My goal was to give the audience a sense of how these protocols work,
why they are being built as they are and ultimately what the privacy and
security concerns emerge as a result.

[Slides are available][slides] (use the arrow keys to navigate) and a
video of the talk is embedded below. For those tl;dr readers the major
take-aways are:

- L2 in L3 tunneling is probably here to stay in the cloud
- Three emerging standards: [VXLAN][vxlan]/[NVGRE][nvgre]/[STT][stt]
- In its raw form these protocols give a level of privacy but not security
- You should still use SSL/IPSec/etc between backend services

[slides]: /slides/cloud-tunnels
[vxlan]: http://tools.ietf.org/id/draft-mahalingam-dutt-dcops-vxlan-02.txt
[nvgre]: http://tools.ietf.org/id/draft-sridharan-virtualization-nvgre-01.txt
[stt]: http://tools.ietf.org/id/draft-davie-stt-02.txt

<iframe width="640" height="360" src="http://www.youtube.com/embed/b4MXVgG77a4?feature=player_detailpage#t=61s" frameborder="0" allowfullscreen></iframe>

Thanks for watching.
