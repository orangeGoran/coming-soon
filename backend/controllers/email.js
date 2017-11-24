var express = require('express')
  , router = express.Router()
  , moment = require('moment')
  , path = require("path")
  , mongoose = require('mongoose')
  , emailSchema = require('../models/emails');

var database = 'mongodb://127.0.0.1/koping';
// var emailModel = mongoose.model('model', emailSchema);
var emailModel = require('../models/emails.js')

mongoose.connect(database, {
  useMongoClient: true
});

var db = mongoose.connection;;

router.post('/register', addEmailToMailingList)

function addEmailToMailingList(req, res) {
  emailModel.find({email: req.body.email}).exec(function(err, data) {
    console.log("data", data);
    if(data.length == 0) {
      new emailModel({
        email: req.body.email,
        date: moment().format(),
        from: req.headers['x-forwarded-for'] || req.connection.remoteAddress
      }).save(function(err) {
        console.log(err);
        res.status(201).send()
      })
    }else {
      res.status(409).send({ error: "Email is alredy used" });
    }
  })
}

module.exports = router
