var express = require("express");
var app = express();
var path = require('path');
var mysql = require("mysql");
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended:false}));

var ejs = require('ejs');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
var con = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:"Snehal&1234",
    port:3306,
    database: "nodedb"
});

app.get('/',function(req,res){
    res.sendFile(__dirname+'/register.html');
});
app.post('/register',function(req,res){
    var sname = req.body.sname;
    var city = req.body.city;
    var country = req.body.country;
    var pass = req.body.pass;

    con.connect(function(err){
        var sql = "insert into student(name,city,country,password) values('"+sname+"','"+city+"','"+country+"','"+pass+"')";
        con.query(sql,function(err,result){
            if(err)throw err;
            console.log("1 record inserted");
            res.redirect('/');
        });
    });
});

app.get('/update',function(req,res){
    res.sendFile(__dirname+'/update.html');
});
app.post('/updateData',function(req,res){
    var sname = req.body.sname;
    var city = req.body.city;
    var country = req.body.country;
    var pass = req.body.pass;
    var id = req.body.id;

    con.connect(function(err){
        var sql = "update student set name = '"+sname+"',city = '"+city+"',country ='"+country+"',password = '"+pass+"' where id ='"+id+"'";
        con.query(sql,function(err,result){
            if(err)throw err;
            console.log("1 record updated");
            res.redirect('/');
        });
    });
});

app.get('/delete',function(req,res){
    res.sendFile(__dirname+'/delete.html');
});
app.post('/deleteData',function(req,res){
    var id = req.body.id;

    con.connect(function(err){
        var sql = "delete from student where id='"+id+"'";
        con.query(sql,function(err,result){
            if(err)throw err;
            console.log("1 record deleted");
            res.redirect('/update');
        });
    });
});

app.get('/login',function(req,res){
    res.sendFile(__dirname+'/login.html');
});
app.post('/loginData',function(req,res){
    var sname = req.body.sname;
    var pass = req.body.pass;

   if(sname && pass){
       con.query("select * from student where name=? and password=?",[sname,pass],function(err,result){
           if(result.length > 0){
               console.log("correct");
               res.redirect('/home');
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

app.get('/home',function(req,res){
    res.send("welcome user");
});


app.get('/retrieve',function(req,res){
        var sql = "select * from student";
        con.query(sql,function(err,result){
            if(err) throw err;
            res.render('retrieve',{
                studs:result
            });
        });
    });
app.listen(3000);
console.log("port 3000 listening");