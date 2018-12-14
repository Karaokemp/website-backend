const PORT = process.env.PORT || 3000;

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetchVideoInfo = require('youtube-info');

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

app.get('/info', function(req, res){
    videoId = req.query.id

    fetchVideoInfo(videoId).then(function (videoInfo) {
        let video = {id: videoInfo.videoId, title: videoInfo.title,img: videoInfo.thumbnailUrl,duration:videoInfo.duration};
        res.json(video);
    
});



});

app.post('/upload',function(req,res){

    let song = req.body;

    db.insert(song,()=>{
        res.json(song);
    });
    
});

app.listen(PORT, function() {
    console.log(`listenning on ${PORT}...`);
  });