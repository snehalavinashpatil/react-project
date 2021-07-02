var fs=require("fs");
var fd = require("readline");
var data = fd.createInterface({
    input:process.stdin,
    output:process.stdout
});
data.question("enter value !",function(str){
    var info = `${str}`;
    fs.appendFile('writenewFile.txt',info,function(err){
        if(err){
            console.log(err);
        }else{
            console.log("process finished");
        }
    });
    data.close();
});