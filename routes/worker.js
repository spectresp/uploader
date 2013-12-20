exports = module.exports;

var fs = require('fs');
var _ = require('underscore');
var path = require('path');


exports.getWorker = function(req, res) {
    res.render('worker/worker.jade', {title: 'worker page', description: 'worker page'});
}
