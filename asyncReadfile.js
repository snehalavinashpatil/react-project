var fs = require("fs");
console.log('program stared to read operation');
fs.readFile('test.txt','utf8',function(err,result){
    if(err) throw err;
    console.log(result);
});
console.log('program ended');