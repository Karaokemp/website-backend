const PORT = process.env.PORT || 3000;

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = require('./db');
// const storage = require('./storage');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send("Karaokemp-backend is on air !");
});

app.get('/uploads', function(req, res){
    db.getUploads((err,docs)=>{
        res.send(docs);
    })
    
    
});

app.post('/upload',function(req,res){

    let upload = req.body;
    
});



app.listen(PORT, function() {
    console.log(`listenning on ${PORT}...`);
  })