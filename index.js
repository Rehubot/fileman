const fs=require ('fs');
function read(fname){

    fs.readFile(fname, 'utf8', function(err, fileContents) {
        if (err) throw err;
        console.log(fileContents)
    }); 
}



function write(fname,content){
    fs.writeFile(fname, content, function(err) {
        if (err) throw err;
    });
}


function append(fname,content){
    fs.appendFile(fname, content,function(err){
        if(err) throw err;
      });fs.appendFile(fname, content,function(err){
      if(err) throw err;
    });
}



function rename(newname,oldname){

    fs.rename(oldname, newname, function (err) {
        if (err) throw err;
        console.log('Rename complete.');
      });
}

  
function unlink(fname){
  fs.unlink(fname, function (err) {
    if (err) throw err;
    console.log('Deletion sucessful.');
  });
}


function stat(fname){
    fs.stat(fname, function (err, stats) {
        if (err) throw err;
        console.log('stats: ' + JSON.stringify(stats));
      });
}
 
stat('rehana.txt');