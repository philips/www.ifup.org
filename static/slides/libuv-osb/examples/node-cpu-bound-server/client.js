var request = require('request');

for (i = 0; i < 8; i++) {
  var start = new Date();
  (function (n) {
    request('http://localhost:8080/', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(n + "," + (new Date() - start))
      }
    })
  }(i));
}

