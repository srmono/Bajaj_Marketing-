//Declare http module
var http = require("http");
var url = require("url");
//var dt = require("./myFirstModule");

// Web Server
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type' : 'text/html'});
  //res.write(`Current time is : ${dt.myDateTime()}`);
  //var q = url.parse(req.url, true).query;
  //var text = q.year;
  res.end(text);
}).listen(8080);

