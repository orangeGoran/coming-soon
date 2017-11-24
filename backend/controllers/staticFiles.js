var express = require('express')
  , router = express.Router()
  , moment = require('moment')
  , path = require("path");


// var db = require('../db')

// var db_name = 'requests'

// Submit a request
// router.post('/create', createFun)
router.get('/test', sendBody)

function sendBody(req, res) {
  console.log("tle");
  res.send("Test completed. You are succesfully comunicating with api.")
}

module.exports = router
