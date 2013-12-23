// android webapps test
var cheerio = require('cheerio');
var fs = require('fs');
var path = require('path');
var indexFile = fs.readFileSync(path.join(__dirname, '/../public/views/andr/index.html'), 'utf8');


exports.getData = function(req, res) {
//  res.send(indexFile);
  res.render('andr/andrindex', {title: 'login page', description: 'login page'});
}


exports.addTask = function(req, res) {
//  res.send(indexFile);
  res.render('andr/addtask', {title: 'Add New Task', description: 'Task handler'});
}


exports.addNewTask = function(req, res) {
//  res.send(indexFile);
  console.log("andr, addNewTask")
//  res.render('andr/addtask', {title: 'Add New Task', description: 'Task handler'});
  res.send('<div>new task added</div>');
}
