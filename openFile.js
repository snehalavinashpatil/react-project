var fs = require("fs");
fs.open("writenewFile.txt","r",function(err,res){
    if(err){
        console.log(err);
    }
    var buf = new Buffer(1024);
    fs.read(res,buf,0,buf.length,0,function(err,bytes){
        if(err){
            console.log(err);
        }
        if(bytes > 0){
            console.log(buf.slice(0,bytes).toString());
        }
        fs.close(res,function(err){
            if(err) throw err;
        });
    });
});