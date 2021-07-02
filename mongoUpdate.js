var mongoCLient  = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

mongoCLient.connect(url,function(err,db){
    if(err) throw err;
    var dbo = db.db("nodedb");
    var query = {name:"sid"};
    var newValue = {$set:{name:"shriya",city:"newyork"}};
    dbo.collection("student").updateOne(query,newValue,function(err,res){
        if(err) throw err;
        console.log(res);
    });
    db.close();
});