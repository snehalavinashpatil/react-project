var mongoCLient  = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

mongoCLient.connect(url,function(err,db){
    if(err) throw err;
    var dbo = db.db("nodedb");
    dbo.createCollection("student",function(err,res){
        if(err) throw err;
        console.log("collection created");
    });
    db.close();
});