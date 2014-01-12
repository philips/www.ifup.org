{
	"disqus_url": "http://www.ifup.org/2012/07/03/luvit-nodes-ziggy-stardust/index.html",
	"disqus_title": "luvit: node's ziggy stardust",

	"Title": "luvit: node's ziggy stardust",
	"Pubdate": "2012-07-03",
	"Keywords": ["luvit", "lua", "talk"],
	"Topics": [
		"Development"
	],

	"Slug": "luvit-nodes-ziggy-stardust",
	"Section": "post",
}

I recently gave a talk at [Open Source Bridge][osb] about
[luvit][luvit], this great platform we are building that is like node.js
only using lua as the implementation language.

Anyways, my slides [are available][slides] but I wanted to create a
slide by slide blog post with my notes too. So here goes!

Also, if you are in Portland for OSCON [I will be giving a talk][oscon]
(*update*: [slides posted][virgo-slides]) about how we are building an on
server monitoring agent for Rackspace Cloud Monitoring on top of luvit. I will
cover why we were interested in using luvit, how luvit works and how we are
embedding it in our monitoring agent.

[oscon]: http://www.oscon.com/oscon2012/public/schedule/detail/24412
[osb]: http://opensourcebridge.org
[luvit]: http://luvit.io
[node]: http://nodejs.org
[slides]: http://ifup.org/slides/luvit-osb/
[virgo-slides]: http://ifup.org/slides/virgo-oscon-2012/

<img src="{{site.url}}/images/ziggy.gif" class="alignright" />

### Untechnical Overview

Luvit is a platform for building your app in an event driven manner.

- Scrawny
- Awkward
- Space Themed (lua)
- <3 community 
- Familiar node APIs

*Notes: luvit is scrawny like Mr. Stardust and uses very little memory.
luvit is a young project and still growing, expect awkwardness. lua is
Portuguese for moon so it is space themed just like Ziggy. There is a
great community with a good sense of humor (luv_handles are a great data
structure name)*


### HTTP Server Example

    local http = require("http")

    http.createServer(function (req, res)
      local body = "Hello world\n"
      res:writeHead(200, {
        ["Content-Type"] = "text/plain",
        ["Content-Length"] = #body
      })
      res:finish(body)
    end):listen(8080)

    print("Server listening at http://localhost:8080/")

*Notes: This code works today. It serves up an HTTP 1.1. server on 8080
that tells you Hello!*


### History of the project

- Started by Tim Caswell
- Strong community of contributors
    - Vladimir Dronnikov
    - Ryan Phillips
    - Paul Querna
    - Brandon Philips (me)
- People taking the project in a variety of directions
    - HTTP Application Servers
    - SDL demos on Linux
    - iPhone app development
    - Cloud monitoring agent

*Notes: There is a great community of people working on this project.
The best part is how many people are interested in different uses- not
just web stuff. In particular Rackspace is interested in a really small
memory footprint monitoring agent.*


## Lua


### Lua - Javascript's Long Lost Brazilian Cousin

- Dynamic language
- Floating point numbers only
- First class functions
- Lexical closures
- Metatables
- Embeddable

*Notes: Lua shares a lot of features with javascript like using floating
point numbers only, being dynamic and having first class functions. It
is like node's long lost Brazilian cousin*


### luajit Features

- x86, ARM, PPC, MIPS
- API compatible with Lua 5.1
- 125K for VM, 85K for JIT compiler
- JIT inlines FFI

*Notes: luajit is an alternative tracing VM for lua that has a great FFI
layer. It is small and fast.*


### Basic idea

- Two types of events in the loop:
    - I/O on file descriptors
    - Timers for future events
- Callbacks are attached to these events
- epoll()/completion ports/kqueue() wait
- callback is called on the correct event

*Notes: Essentially libuv is just a big loop (see the next section) that
runs poll on a bunch of file descriptors with the timeout of the poll
set to the next timer that needs to run. When the poll complete a
callback is made so the user can handle the event. I have [talk on
libuv][libuv-osb] that covers all the details too*

[libuv-osb]: http://ifup.org/slides/libuv-osb/#1


### Other platforms built on libuv

- [rust-lang](http://www.rust-lang.org/)
- [node.js](http://nodejs.org/)
- [candor.io](https://github.com/creationix/candor.io)
- [luvmonkey](https://github.com/creationix/luvmonkey)

*Notes: A number of new platforms are using libuv. Rust is a new
language from mozilla. candor is a limited subset of javascript.
luvmonkey is mozilla's spidermonkey with libuv.  http://julialang.org/
is also using libuv.*


### Follow along at home

    git clone git://github.com/luvit/luvit.git
    cd luvit

### gyp (all platforms)

    ./configure
    make -C out
    tools/build.py test
    ./out/Debug/luvit
    Welcome to the Luvit repl
    > 

### make (linux, embedded)

    make
    make test
    ./build/luvit
    Welcome to the Luvit repl
    >


### Object system

    local Object = require('core').Object
    local Rectangle = Object:extend()
    function Rectangle:initialize(w, h)
      self.w = w
      self.h = h
    end
    function Rectangle:getArea()
      return self.w * self.h
    end

    local rect = Rectangle:new(3, 4)
    p(rect:getArea())

*Notes: Lua doesn't have an object system so we impelemted our own in
order to do our inheritance of stream, event emitter, etc*


### JSON Example

    local JSON = require('json')
    local value = JSON.parse([[
    {
      "author": "Brandon Philips <brandon@ifup.org>",
      "name": "luvit - node's Ziggy Stardust",
      "description": "a talk about luvit"
    }
    ]])

    local json = JSON.stringify(value, {beautify=true,indent_string="  "});
    print(json)

*Notes: Luvit has a JSON parser using yajl. It has some nice features
like allowing comments*


## Users

*Notes: There are a number of users of luvit today. Lets see some of
them*


### Real world applications 

- luvit.io is hosted using luvit
- Rackspace agent (see me at OSCON)
- Demos of using SDL/GL and Joystick interaction


Thanks to the luvit community for all of their hard work. Also thanks to
Rackspace for letting me do work in the open.
