'use strict';

var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/LocalDB";


exports.get_all = function (callback){
  mongoClient.connect(url, function(err, db){
    if(err) { return console.dir(err); }

      db.collection('Jobs', function(err, collection){
        if(err) { return console.dir(err); }

          collection.find().toArray(function(err, items){
            if(err) { return console.dir(err); }
              callback(items);
          });
      });
  });
};

exports.get = function (jobId, callback){
  mongoClient.connect(url, function(err, db) {
    if(err) { return console.dir(err); }

    db.collection('Jobs', function(err, collection){
      if(err) { return console.dir(err); }

        collection.find({jobId: jobId}).toArray(function(err, items){
          if(err) { return console.dir(err); }
            callback(items);
      });
    });
  });
};
