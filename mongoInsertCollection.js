var mongoCLient  = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

mongoCLient.connect(url,function(err,db){
    if(err) throw err;
    var dbo = db.db("nodedb");
    dbo.collection("batch").aggregate([
        {$lookup:{
            from:'information',
            localField:'id',
            foreignField:'id',
            as:"batchId"
        }
    }
    ]).toArray(function(err,res){
        if(err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    });
});