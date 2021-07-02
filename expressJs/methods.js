var express = require("express");
var app = express();
app.get('/',function(req,res){
    res.send('<html><body><h1>Hello world !!!</h1></body></html>');
});
app.post('/post',function(req,res){
    res.send("post request");
});
app.put('/put',function(req,res){
    res.send("put request");
});
app.delete('/delete',function(req,res){
    res.send("delete request");
});
var server = app.listen(3000,function(){
    console.log("node server is running");
});