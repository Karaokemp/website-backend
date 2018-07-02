const  mega = require('megajs');
const fs = require('fs');
const ytdl = require('ytdl-core');


exports.upload = function(song,cb){
fileName = `${song.title}.mp4`;

let download = ytdl(`https://www.youtube.com/watch?v=${song.id}`,{quality: 'highest', filter: (format) => format.container === 'mp4'})
.pipe(fs.createWriteStream(fileName));

download.on('finish', function(){
    console.log('downloaded!');

    const storage = mega({email:'karaokemp@gmail.com', password: 'BestCampInMidburn2016!'},()=>{
        console.log('created storage');
        fs.createReadStream(fileName).pipe(storage.root.upload(fileName,()=>{
            cb();

        }));
        });

   

});


}


