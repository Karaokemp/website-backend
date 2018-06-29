const PORT = process.env.PORT || 3000;
const MONGODB_URL = 'mongodb://dreckguy:bla1bla2bla3@ds219318.mlab.com:19318/heroku_907mrctp';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect(MONGODB_URL, function(err, db) {
  if(!err) {
    console.log("connected to mongodb.");
  }else{
      console.error(err);
  }
});



var uploads = [];

app.get('/', function(req, res){
    res.send("Karaokemp-backend is on air !");
});

app.get('/uploads', function(req, res){
    res.json(uploads);
});

app.post('/upload',function(req,res){

    let upload = req.body;
    uploads.push(upload);
    res.send(JSON.stringify(upload));

});



app.listen(PORT, function() {
    console.log(`listenning on ${PORT}...`);
  })