# luvit - node's Ziggy Stardust

---

### About me

- Love working on systems software
- Work at Rackspace on the Cloud Monitoring team
- Previously at SUSE working on the Linux Kernel

<!-- TPN: biked from Astoria to Idaho along the Columbia last week! Woo! -->

---

# Orientation

---

### Untechnical Overview

Luvit is a platform for building your app

- Scrawny
- Awkward
- Space Themed (lua)
- <3 community
- Familiar node APIs

### Technical Overview

- lua using luajit
- low memory footprint
- I/O driven event loop
- Small simple C API
- crypto, ssl, zlib, json bindings
- tcp, http, dns protocol support
- Windows, Linux, FreeBSD and OSX

<!-- Essentially a cross platform platform to build your application -->

---

### HTTP Server Example

```
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
```

---

### Community

- http://luvit.io
- Use github pull requests/issues
- IRC on freenode #luvit
- Google group mailing list for discussion
- Apache 2.0 Licensed codebase
- Fun group of contributors

<!-- TPN: say hi in the IRC room, luvhandles anecdote -->

---

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

--- 

# Motivations

---

### Community motivations

- Small memory footprint
- Pure C codebase
- Embeddable
- Coroutines
- Fast!

---

### Comparison to node

<!-- details here -->

---

### Cloudkick Agent

<!-- Lets look back in time to a project I worked on using Lua and C. --> 

- Doing network I/O to a master server
- Collecting statistics about the machine
- Also running custom plugins
- Single threaded

---

# Foundations

---

# lua

---

### History

- Developed in Brazil at TeCGraf
- Related to a language called sol (sun)
- New language called lua (moon)
- Meta-mechanisms instead of features

<!-- meta tables are an example of a meta mechanism -->

### Feature set

- tables, tables, tables
- etc

### Example code

```
GroundControl = {}

function GroundControl.new()
  obj = {}
  obj.heard_major_tom = false
  setmetatable(obj, { __index = GroundControl })
  return obj
end

function GroundControl:heard()
  print(self.heard_major_tom)
end

a = GroundControl.new()

a:heard()
a.heard()
```

---

# luajit

---

### Features

- x86, ARM, PPC, MIPS
- API compatible with Lua 5.1
- 125K for VM, 85K for JIT compiler
- JIT inlines FFI

---

# libuv

---

### Basic idea

- Two types of events in the loop:
	- I/O on file descriptors
	- Timers for future events
- Callbacks are attached to these events
- epoll()/completion ports/kqueue() wait
- callback is called on the correct event

---

### Event loop pseudo code

```
for (;;) {
  nfds = poll(fds, maxfd, next_timer());
  if (nfds == 0)
     timer_callback();
     
  for(n = 0; n < nfds; ++n) {
     callbacks[fd]();
  }
}
```

---

### Other platforms built on libuv

<!-- Rust is a new language from mozilla 
     candor is a limited subset of javascript
     luvmonkey is mozilla's spidermonkey with libuv -->

- [rust-lang](http://www.rust-lang.org/)
- [node.js](http://nodejs.org/)
- [candor.io](https://github.com/creationix/candor.io)
- [luvmonkey](https://github.com/creationix/luvmonkey)

---

# building luvit

---

### Follow along at home

```
git clone git://github.com/luvit/luvit.git
cd luvit
```

---

### gyp (all platforms)

```
./configure
make -C out
tools/build.py test
./out/Debug/luvit
Welcome to the Luvit repl
> 
```

### make (linux, embedded)

```
make
make test
./build/luvit
Welcome to the Luvit repl
>
```

---

# luvit code practices

http://ifup.org/slides/luvit-osb/examples

---

### Object system

<!-- Lua doesn't have an object system so we impelemted 
     our own in order to do our inheritance of stream,
     event emitter, etc --> 

```
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
```

---

### Module System

<!-- leaking to global scope is a bad practice 
     require() returns a table that the imported
     file returns -->

```
-- hello.lua
local hello = {}
hello.world = function()
  print("Hello World")
end
return hello

-- run.lua
local hello = require('hello')
hello.world()
```

### JSON Example

```
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
```

### HTTP Client

```
local http = require('http')

local options = {
  host = "luvit.io",
  port = 80,
  path = "/"
}

local req = http.request(options, function (res)
  res:on('data', function (chunk)
    p("ondata", {chunk=chunk})
  end)
end)

req:done()
```

---


# Users

---

### Modules

* [luvit-mysql](https://github.com/kengonakajima/luvit-mysql) - MySQL binding
* [luvit-redis](https://github.com/twojcik/luvit-redis) - redis bindings
* [curl](https://github.com/dvv/luvit-curl) - Simple HTTP request helper
* [luvit-irc](https://github.com/radare/luvit-irc) - IRC Client Library 
* [lua-msgpack-native](https://github.com/kengonakajima/lua-msgpack-native) - Fast MessagePack
* [rounded](https://github.com/yields/rounded) - Connect middleware
* [bourbon](https://github.com/racker/luvit-bourbon) - async test runner
* [checkit](https://github.com/dvv/luvit-checkit) - simple test runner

### Real world applications 

- luvit.io is hosted using luvit
- Rackspace agent (see me at OSCON)
- Demos of using SDL/GL and Joystick interaction

---

## Future work

<!-- Documentation is critical, we often rely on nodejs.org, eek -->

- Documentation!
- Package management lum
- luvit as a library
- ports to OSX/iOS and Android event loops