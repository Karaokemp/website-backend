const PORT = process.env.PORT || 3000;

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());



var uploads = [
    {title:'Maddona - like a virgin', url:'https://www.youtube.com/watch?v=s__rX_WL100'},
    {title:'Offsprinfg - Why don\'t you get a job?', url:'https://www.youtube.com/watch?v=LH-i8IvYIcg'}  
];

app.get('/', function(req, res){
    res.send("Karaokemp-backend is on air !");
});

app.get('/uploads', function(req, res){
    res.json(uploads);
});

app.post('/upload',function(req,res){

    let upload = req.body;
    uploads.push(upload);
});



app.listen(PORT, function() {
    console.log(`listenning on ${PORT}`);
  })