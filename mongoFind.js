var mongoCLient  = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

mongoCLient.connect(url,function(err,db){
    if(err) throw err;
    var dbo = db.db("nodedb");
    // dbo.collection("student").findOne({},function(err,res){
    //     if(err) throw err;
    //     console.log(res.name);
    // });
    // dbo.collection("student").find({},{projection:{_id:0,name:1,city:1,subject:1}}).toArray(function(err,res){
    //     if(err) throw err;
    //     console.log(res);
    // });
    dbo.collection("student").find().limit(3).toArray(function(err,res){
        if(err) throw err;
        console.log(res);
    });
    db.close();
});