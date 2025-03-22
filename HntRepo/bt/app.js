var http = require("http");
var fs = require("fs");

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var html = fs.readFileSync(__dirname + "/index.html", 'utf8');

  res.end(html);
}).listen(3000);

console.log("Listening on port 3000... ");