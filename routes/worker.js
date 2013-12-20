exports = module.exports;

var fs = require('fs');
var _ = require('underscore');
var path = require('path');

var readTemplate = function(filePath, cb) {
  fs.readFile(path.join(__dirname + filePath),function (err, data){
    return data;
  });
  _.isFunction(cb) ? cb(data) : "";
}


// read html file when loading
var templates = {};
templates.index = readTemplate('../public/views/worker/index.html');


exports.getWorker = function(req, res) {
//  res.send();
  res.writeHeader(200, {"Content-Type": "text/html"});
  res.write(templates.index);
  res.end();
}
