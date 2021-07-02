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
    var sql = "insert into student (name,city) values('snehal','pen')";
    // var query = 'create table student (id int auto_increment primary key,name varchar(50),city varchar(50))';
    // con.query("create database nodedb",function(err,result){
    //     if(err) throw err;
    //     console.log('database created');
    // });
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log('table created');
    });
});