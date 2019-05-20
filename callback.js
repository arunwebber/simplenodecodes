var fs = require('fs');
fs.readFile('new.js',function(err,file){
  if(err){
    handleError(err);
  }else{
    console.log("file: ", file);
  }
})
