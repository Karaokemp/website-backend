const PORT = process.env.PORT || 3000;

const express = require('express');
const app = express();

var uploads = [
    {title:'Maddona - like a virgin', url:'https://www.youtube.com/watch?v=s__rX_WL100'},
    {title:'Offsprinfg - Why don\'t you get a job?', url:'https://www.youtube.com/watch?v=LH-i8IvYIcg'}  
];

app.get('/', function(req, res){
    res.send("Karaokemp backend is in the house!");

app.get('/uploads', function(req, res){
    res.json(uploads);
});



app.listen(PORT, function() {
    console.log(`listenning on ${PORT}`);
  })