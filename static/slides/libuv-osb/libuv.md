# libuv - The Power Underneath Node.js

---

### Why I care about libuv

- I help maintain [luvit](http://luvit.io)
- I miss the Kernel
- Writing code that works across *nix sucks

---

### Orientation

---

### Major topics

- What is event driven non-blocking I/O?
- Why would you want to use it?
- Why libuv started?
- Example HTTP server
- Asyncing POSIX
- Building a platform on libuv
- Cross platform concerns
- Conclusion

---

## Event driven non-blocking I/O

---

### Basic idea

- Two types of events in the loop:
	- I/O on file descriptors
	- Timers for future events
- Callbacks are attached to these events
- epoll()/completion ports/kqueue() wait
- callback is called on the correct event

---

### Visual Basic

![](images/Microsoft_Visual_Studio_6_screenshot.png)

<!--
You don't have to admit it but you know you have used it.
Essentially, you can think about event driven non-blocking I/O
like a visual basic program. Instead of attaching a function to
a button click you attach a function to the socket connection.
-->

--- 

### Event loop pseudo code

```
while (1) {
  nfds = poll(fds, next_timer());
  if (nfds == 0)
     timer_callback();
     
  for(n = 0; n < nfds; ++n) {
     if (fds[n] == READY)
     	callbacks[n]();
  }
}
```

<!--
This is a simple example of what an event loop looks like
that waits on either fd events or a timer event.
-->

---

## Strategy Comparison time!

- Event Driven I/O Loop
- Threaded
- Multiple Processes

---

### Event Driven I/O Loop 

- Advantages
  - No process level locking required
  - Fast enough for I/O workloads
  - Easy to understand by most developers

<!--
I/O workloads are alot of internet applications today
where you are going off and talking to a DB or backend
APIs and waiting on their response so this is OK

Tons of papers and tools are designed around helping
people disable threading and locking issues. It is hard
skip it if you can avoid doing it.
-->
  
- Disadvantages
  - CPU bound workload can block everything
  - Scaling to multiple CPUs isn't "free"

<!--
The only way to scale using event driven I/O loops is
to scale out to multiple processes or threads. Generally
in a request/response protocol like http you will want
to load balance requestors to multiple running instances
of your application.

CPU bound workloads are terrible in this model. Think of 
those poorly designed GUI systems that lock-up when you
ask it to do something CPU intensive like encode a video.
-->

---

### CPU bound work blocking everything example

---

### Threaded model

- Advantages
  - CPU bound work doesn't stop I/O  
  - Fans out naturally over multiple CPUs
  
- Disadvantages
  - Harder to program correctly
  - Debugging is hard 

<!--
I would say that debugging tends towards the impossible
side versus the hard side.
-->

---

### Process per request

- Advantages
  - Simple model that everyone can understand
  - Fans out naturally over multiple CPUs

<!--
Every user gets a process!

This is the CGI model essentially. The trouble with this is that 
it uses a ton of resources and the process will be sleeping a
lot when it goes off to ask the database.
-->
  
- Disadvantages
  - Harder to program correctly
  - Debugging is hard
  - Processes scale poorly
  
---

## Conclusions

<!--
Event driven I/O loop works well for the type of work
that most web applications do. Everything else is harder
to implement
-->

---

## Back to libuv

---

### The Short History of libuv

- First commit March 2011
- Microsoft helped port [node to windows](http://blog.nodejs.org/2011/06/23/porting-node-to-windows-with-microsoft%25e2%2580%2599s-help/)
- Appeared in node 0.5 and stable 0.6 

---

### Big list of features

- Non-blocking TCP sockets (using IOCP on Windows)
- Non-blocking named pipes
- UDP
- Timers
- Child process spawning
- Asynchronous DNS
- Asynchronous file system APIs uv_fs*
- High resolution time uv_hrtime
- Current executable path look up uv_exepath
- Thread pool scheduling uv_queue_work

---

### Platforms

## Windows, Linux, OSX, BSD

---

## Lets dive into some code

https://github.com/philips/libuv-webserver

---

### Main

```
  parser_settings.on_headers_complete = on_headers_complete;

  resbuf.base = RESPONSE;
  resbuf.len = sizeof(RESPONSE);

  uv_loop = uv_default_loop();

  uv_tcp_init(uv_loop, &server);

  struct sockaddr_in address = uv_ip4_addr("0.0.0.0", 8000);

  uv_tcp_bind(&server, address);

  uv_listen((uv_stream_t*)&server, 128, on_connect);

  printf("listening on port 8000\n");

  uv_run(uv_loop);
```

---

### on_connect

```
  client_t* client = malloc(sizeof(client_t));
  client->request_num = request_num;

  uv_tcp_init(uv_loop, &client->handle);
  http_parser_init(&client->parser, HTTP_REQUEST);

  client->parser.data = client;
  client->handle.data = client;

  uv_accept(server_handle, (uv_stream_t*)&client->handle);

  uv_read_start((uv_stream_t*)&client->handle, on_alloc, on_read);
```

---

### on_read

```
  size_t parsed;

  client_t* client = (client_t*) tcp->data;

  if (nread >= 0) {
    parsed = http_parser_execute(
        &client->parser, &parser_settings, buf.base, nread);
    if (parsed < nread) {
      LOG_ERROR("parse error");
      uv_close((uv_handle_t*) &client->handle, on_close);
    }
  } else {
    uv_err_t err = uv_last_error(uv_loop);
    if (err.code != UV_EOF) {
      UVERR(err, "read");
    }
  }

  free(buf.base);
```

---

### on_headers_complete

```
  client_t* client = (client_t*) parser->data;
  
  uv_write(
      &client->write_req,
      (uv_stream_t*)&client->handle,
      &resbuf,
      1,
      after_write);

  return 1;
```

---

### How does it perform?

- 872 Kilobytes, ~7800 requests per second

---

### How to save that trouble

- Buy a faster computer
- Use node.js or luvit

```
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8000/');
```

---

## Asyncing POSIX

---

### Async FS and DNS

<!--
A socket example is cool but a number of functions defined
in POSIX do not have nice async I/O like sockets. What do
you do about those? Well libuv builds on some tried and true
methods.
-->

- libeio for filesystem ops
  - open/read/write/readdir not async
  - uses a thread pool
- c-ares for dns
  - gethostbyname/getaddrinfo not async
  - implements dns on top of non-blocking sockets

<!--
The windows implementation doesn't use libeio but it uses
threads to do this work. It is really too bad no Kernel
does this natively and punts to userspace but it sort of 
makes sense
-->

---

## Building a platform with libuv

---

### The basics

- No documentation
  - include/uv.h is good though 
- Lots of well written tests too
- Interesting platforms built
- Great community at #libuv

---

### What magic is in node that isn't libuv

- TLS bindings
- crypto bindings
- http parser
- zlib bindings
- readline
- JSON

---

## Trouble spots luvit has hit

--

### Keeping refs through a callback

- Both node and luvit had this bug at some point

---

### Ref counting is a bit odd

- uv_run() is a blocking call; exits when ref count is zero
- timers, like all objects, take a ref when created
- however this means that an inactive timer holds your app open

---

### Having to bind to openssl

:-/

---

### Conclusions

- libuv is awesome!
- event driven non-blocking I/O is useful
- understanding the underlying technology is important

<!--
At the very least it provides a nice abstraction to hard
platform problems that everyone enounters in C.

A lot of todays application servers are simply jocking
information around between services so using an event driven
non-blocking I/O model works well. CPU intensive work is 
usually done by other services.


-->

---

### Projects using libuv

- [node.js](http://nodejs.org)
- [Mozilla's Rust](http://www.rust-lang.org/)
- [Luvit](http://luvit.io/) - talk yesterday
- Ben Noordhuis and Bert Belder's [Phode async PHP project](https://github.com/bnoordhuis/phode)
- Kerry Snyder's [libuv-csharp](https://github.com/kersny/libuv-csharp)
- Andrea Lattuada's [web server](https://gist.github.com/1195428)
- Daniel Kang's [node.native](https://github.com/d5/node.native/)