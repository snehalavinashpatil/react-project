var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mysql = require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:"Snehal&1234",
    port:3306,
    database: "nodedb"
});
con.connect(function(err){
    if(err) throw err;
    console.log('connected!!!');
});
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.get('/student',function(req,res){
    con.query("select * from student",function(err,result,fields){
        if(err)throw err;
        res.end(JSON.stringify(result));
    });
});
app.post('/studentAdd',function(req,res){
    var param = req.body;
    con.query("insert into student set ?",param,function(err,result,fields){
        if(err) throw err;
        res.end(JSON.stringify(result));
    });
});
app.put('/studentPut',function(req,res){
    con.query("update student set name=?,city=?,country=?,password=? where id=?",[req.body.name,req.body.city,req.body.country,req.body.password,req.body.id],function(err,result,fields){
        if(err)throw err;
        res.end(JSON.stringify(result));
    });
});
app.delete('/delete',function(req,res) {
    con.query('delete from student where id=?',[req.body.id],function(err,result,fields){
        if(err)throw err;
        res.end(JSON.stringify(result));
    });
});
app.listen(3000);
console.log('REST API listening on port no 3000');