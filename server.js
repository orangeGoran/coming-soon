var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require("path");
var data_conf = require('./config.json')

var app = express();

var serverName = '/csp/'; //coming soon page

app.set('port', process.env.PORT || data_conf.server_port);


app.use(logger('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


var staticFiles = require('./backend/controllers/staticFiles');
var emailList = require('./backend/controllers/email');

app.use(serverName + 'public', express.static('public'));
app.use(serverName + 'email', emailList);

app.get('/', function(req, res) {

  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(app.get('port'));
console.log("App listening on " + app.get('port'));
