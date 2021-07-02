var express = require('express');
var session = require('express-session');
var app = express();
var bodyparser = require('body-parser');

app.set('views',__dirname+'/views');
app.engine('html',require('ejs').renderFile);

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.use(session({secret:'mission impossible', resave: false,saveUninitialized: true}));
app.get('/',function(req,res){
    if(req.session.email){
        res.redirect('/admin');
    }else{
        res.render('indexPage.html');
    }
});

app.post('/login',function(req,res){
    req.session.email = req.body.email;
    req.session.password = req.body.password;
    res.end('Done');
});

app.get('/admin',function(req,res){
    if(req.session.email){
        res.write('<h1>Hello'+req.session.email+'</h1>');
        res.write('<a href="/logout">Logout</a>');
        res.end();
    }else{
        res.write('<h1>Please login first</h1>');
        res.write('<a href="/">Login</a>');
        res.end();
    }
});

app.get('/logout',function(req,res){
    req.session.destroy(function(err){
        if(err){
            console.log(err);
        }else{
            res.redirect('/');
        }
    });
});

app.listen(3000);
console.log('listening on port 3000');