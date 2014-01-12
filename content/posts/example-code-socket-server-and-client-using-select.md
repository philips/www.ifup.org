{
	"disqus_url": "http://www.ifup.org/2008/08/30/example-code-socket-server-and-client-using-select/index.html",
	"disqus_title": "example code: socket server and client using select()",

	"Title": "example code: socket server and client using select()",
	"Pubdate": "2008-08-30",
	"Topics": [
		"Development"
	],

	"Slug": "example-code-socket-server-and-client-using-select",
	"Section": "post",
}
I spent the last hour re-familiarizing myself with Unix sockets via man-pages
and HOWTOs. I have written client/server socket apps a dozen times before but
because of iterative development I no longer had a simple example lying around. 

To save myself this trouble in the future I created a <a
href="http://ifup.org/git/?p=select-twit.git">little socket client and
server</a> for future reference.  This app allows you to have a Twitter style
conversation (140 char limit) with everyone on your system who has permissions
to the Unix socket! Perhaps the Unix shell is the next micro-blogging platform.
;)
