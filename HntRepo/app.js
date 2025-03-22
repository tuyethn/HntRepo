// const http = require('http');
// const port = process.env.PORT || 3000

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>');

// });

// server.listen(port,() => {
//   console.log(`Server running at port `+port);
// });
var http = require("http");
var fs = require("fs");

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var html = fs.readFileSync(__dirname + "/index.html", 'utf8');

  res.end(html);
}).listen(3000);

console.log("Listening on port 3000... ");