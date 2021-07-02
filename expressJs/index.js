var express = require("express");
var app = express();
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended:false}));
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});
app.post('/submit-data',function(req,res){
    var name = req.body.Firstname +' '+req.body.Lastname;
    res.send(name+'submitted successfully');
});
var server = app.listen(3000,function(){
    console.log("running");
});