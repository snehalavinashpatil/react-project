var mongoCLient  = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

mongoCLient.connect(url,function(err,db){
    if(err) throw err;
    var dbo = db.db("nodedb");
    // var query = {name:"snehal"};
    var query = {name:/^s/};
    dbo.collection("student").find(query).toArray(function(err,res){
        if(err) throw err;
        console.log(res);
    });
    db.close();
});