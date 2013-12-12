var mongoose = require('mongoose');
var db = null;

var connectToDB = function() {
  db = mongoose.createConnection('localhost');
  db.on('error', function(error) {
    console.log("databaseModel, could not connect database, ERROR: " + error);
  });
  return db;
}

module.exports.connect = connectToDB;
