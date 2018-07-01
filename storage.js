const  mega = require('megajs');
const fs = require('fs');
const youtubedl = require('youtube-dl');


exports.upload = function(song,cb){
    const storage = mega({email:'karaokemp@gmail.com', password: 'BestCampInMidburn2016!'},()=>{
        let  folder = storage.root.children.filter((file)=>{return file.name=='New Songs';})[0];
 
    });

}

exports.upload();

