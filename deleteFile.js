var fs = require("fs");
fs.unlink('writeFile.txt',function(){
    console.log("file removed !!");
});