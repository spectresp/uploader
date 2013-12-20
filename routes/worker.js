exports = module.exports;

var fs = require('fs');
var _ = require('underscore');
var path = require('path');

var readTemplate = function(filePath, cb) {
  fs.readFile(path.join(__dirname + filePath),function (err, data){
    res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
    res.write(data);
    res.end();
  });
  _.isFunction(cb) ? cb() : "";
}


// read html file when loading
var templates = {};
templates.index = readTemplate('../public/views/worker/index.html');


exports.getworker = function(req, res) {
//  res.send();
  response.writeHeader(200, {"Content-Type": "text/html"});
  response.write(templates.index);
  response.end();
}
