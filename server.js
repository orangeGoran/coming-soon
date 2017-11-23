var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require("path");
var data_conf = require('./config.json')

var app = express();

var serverName = 'csp'; //coming soon page

app.set('port', process.env.PORT || data_conf.server_port);


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


var staticFiles = require('./controllers/staticFiles');

app.use('/csp/public', express.static('public'))

app.get('/', function(req, res) {

  res.sendFile(path.join(__dirname+'/public/index.html'));
})

app.listen(app.get('port'));
console.log("App listening on " + app.get('port'));
