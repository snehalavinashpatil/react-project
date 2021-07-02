queryString = require("querystring");
var ob1 = queryString.parse('name=snehal&city=pen');
console.log(ob1,"ob1 test");

var ob2 = queryString.stringify({name:'snehal',city:"pen"});
console.log(ob2,"ob2 testing");