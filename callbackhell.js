//Variables
var fs=require('fs');
var util =require('util');
var read =util.promisify(fs.readFile);
//Call back hell code
fs.readFile('new.js',function(err,file){
  if(err){
    return err;
  }else{
    fs.readFile('new.js',function(err,file1){
      if(err){
        return err;
      }else{
        fs.readFile('new.js',function(err,file2){
          if(err){
            return err;
          }else{
            console.log("file1 :",file);
            console.log("file2 :",file1);
            console.log("file3 :",file2);
          }
        })
      }
    })
  }
})

//Solving using promises

Promise.all([read('new.js'),read('new.js')])
       .then(data =>{
         const[data1,data2,data3]=data;
         console.log('file1 :',data1);
         console.log('file2 :',data2);
       })
