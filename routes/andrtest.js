// android webapps test
var cheerio = require('cheerio');
var fs = require('fs');
var path = require('path');
var indexFile = fs.readFileSync(path.join(__dirname, '/../public/views/andr/index.html'), 'utf8');


exports.getData = function(req, res) {
//  res.send(indexFile);
  res.render('andr/andrindex', {title: 'login page', description: 'login page'});
}
