
const MONGODB_URL = 'mongodb://dreckguy:bla1bla2bla3@ds219318.mlab.com:19318/heroku_907mrctp';
const MongoClient = require('mongodb').MongoClient;


exports.getUploads = function(cb){

        MongoClient.connect(MONGODB_URL, function(err, client) {
            const db = client.db('heroku_907mrctp');
            const uploads = db.collection('uploads');
              if(err) {
                console.error(err);
            }
                uploads.find({}).toArray(function(err, docs) {
                    cb(err,docs);
                    client.close();
              });
        });
    }

/* insert
MongoClient.connect(MONGODB_URL, function(err, client) {
        const db = client.db('heroku_907mrctp');
        const uploads = db.collection('uploads');
        
          if(err) {
            console.error(err);
        }
            uploads.insert(upload);
            client.close();
            res.json(upload);

    });
*/