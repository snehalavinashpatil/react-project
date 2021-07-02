var express = require("express");
var app = express();
app.get('/',function(req,res){
    res.send("Hello world good morning !!!!");
});
app.listen(3000);