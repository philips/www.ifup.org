function fib(n) {
  if (n < 2)
    return n;

  return fib(n-1) + fib(n-2)
}

var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(fib(40) + "\n");
}).listen(8080, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8080/');
