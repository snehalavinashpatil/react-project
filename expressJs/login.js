var express = require("express");
var app = express();
var path = require('path');
var mysql = require("mysql");
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended:false}));
var session = require('express-session');

var ejs = require('ejs');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(session({secret:'its secret', resave: false,saveUninitialized: true}));
var con = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:"Snehal&1234",
    port:3306,
    database: "nodedb"
});

app.get('/',function(req,res){
    res.sendFile(__dirname+'/login.html');
});

app.get('/logout',function(req,res){
    if(req.session){
        res.sendFile(__dirname+'/logout.html');
    }else{
        res.sendFile(__dirname+'/login.html');
    }
});
app.post('/loginData',function(req,res){
    var sname = req.body.sname;
    var pass = req.body.pass;

   if(sname && pass){
       con.query("select * from student where name=? and password=?",[sname,pass],function(err,result){
           if(result.length > 0){
               console.log("correct");
               res.redirect('/logout');
           }else{
               res.send('Incorrect username and password');
           }
           res.end();
       });
   }else{
       res.send("Please enter username and password");
       res.end();
   }

});

app.post("/logoutAccount", function(req, res){
    res.redirect("/")
});
app.listen(8000);
console.log("port 8000 listening");