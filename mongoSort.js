var mongoCLient  = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

mongoCLient.connect(url,function(err,db){
    if(err) throw err;
    var dbo = db.db("nodedb");
    var mysort = {name:-1};
    var deleteExp = {city:"dadar"};
    // dbo.collection("student").find({}).sort(mysort).toArray(function(err,res){
    //     if(err) throw err;
    //     console.log(res);
    // });
    dbo.collection("student").deleteOne(deleteExp,function(err,res){
        if(err) throw err;
        console.log("one document deleted");
        console.log(res);
    });
    db.close();
});