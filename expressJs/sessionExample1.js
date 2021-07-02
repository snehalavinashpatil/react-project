var express = require('express');
var session = require('express-session');
var app = express();
app.use(session({secret:'its secret', resave: false,saveUninitialized: true}));
app.get('/',function(req,res){
    if(req.session.pageViews){
        req.session.pageViews++;
        res.send('You visited page'+req.session.pageViews+'times');
    }else{
        req.session.pageViews = 1;
        res.send('Welcometo the page for the first time');
    }
});
app.listen('3000');
console.log('server started on port no 3000');