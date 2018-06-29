const PORT = process.env.PORT || 3000;
const MONGODB_URL = 'mongodb://dreckguy:bla1bla2bla3@ds219318.mlab.com:19318/heroku_907mrctp';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Retrieve
const MongoClient = require('mongodb').MongoClient;

// Connect to mongo



app.get('/', function(req, res){
    res.send("Karaokemp-backend is on air !");
});

app.get('/uploads', function(req, res){
    
    MongoClient.connect(MONGODB_URL, function(err, client) {
    const db = client.db('heroku_907mrctp');
    const uploads = db.collection('uploads');
    
      if(err) {
        console.error(err);
    }
        uploads.find({}).toArray(function(err, docs) {
        console.log("Found the following records");
        console.log(docs)
        res.json(docs);
        client.close();
      });
});
});

app.post('/upload',function(req,res){

    let upload = req.body;
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
});



app.listen(PORT, function() {
    console.log(`listenning on ${PORT}...`);
  })