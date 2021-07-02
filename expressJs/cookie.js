var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());
app.get('/setCookie',function(req,res) {
    res.cookie('cookieName','cookieValue');
    res.cookie('Company','Infosys');
    res.cookie('city','Pune');
    res.status(200).send('cookie is set');
});
app.get('/getCookie',function(req,res){
    res.status(200).send(req.cookies);
});
app.get('/',function(req,res){
    res.status(200).send('welcome to cookie example');
});

app.listen(3000);
console.log('Server started with port no 3000');