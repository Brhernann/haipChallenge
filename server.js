var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname,'src')));

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/',function(request,resp,next){
  resp.render('index')
});

let Webservices = require('./routes/Webservices.js');

app.use('/api', Webservices);

app.listen(8081, () => console.log('Server ON'));
