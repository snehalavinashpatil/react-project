var fs=require('fs');
console.log("program stared to read operation");
var data = fs.readFileSync("test.txt");
console.log("synchronous data"+data.toString());
console.log("program ended");