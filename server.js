const PORT = process.env.PORT || 3000;

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const getYoutubeTitle = require('get-youtube-title');


const db = require('./db');
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

    let song = req.body;
    if(!song.title){
        getYoutubeTitle(song.id, function (err, title) {

            if(!err&& title){
                song.title = title;
                console.log(`found title: ${title}`);
            }else{
                throw new Error('cannot get title');
                
            }
          });
    }
    db.insert(song,()=>{
        res.json(song);
    });
    
});

app.listen(PORT, function() {
    console.log(`listenning on ${PORT}...`);
  });