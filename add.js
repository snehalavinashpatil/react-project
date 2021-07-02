var fs=require('readline');
var data=fs.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    });
data.question('enter first number',function(n1){
    data.question('enter second number',function(n2){
        var result = parseInt(`${n1}`)+parseInt(`${n2}`);
        console.log('the sum is'+`${result}`);
    });
});
