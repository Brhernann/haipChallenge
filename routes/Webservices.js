var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const Joi = require('joi');
const { thestring, thelength } = require('../config/isvalid'); // VALIDATOR
var FUNC = require('../config/functions');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
})

//Primer Web Services

router.post('/EndpointOne', urlencodedParser, function (req, res) {

  if (!req.body || req.body.length === 0) {
    console.log('request body not found');
    return res.sendStatus(400);
  }

  const data = req.body;
  const { error, value } = Joi.validate(data, thelength);

  if (error) {
      res.status(401).json({ success: false, error: error.details });
  } else {
    FUNC.exerciseOne(data, res);
  }

});

router.post('/EndpointTwo', urlencodedParser, function (req, res) {

  if (!req.body || req.body.length === 0) {
    console.log('request body not found');
    return res.sendStatus(400);
  }
  const data = req.body;
  const { error, value } = Joi.validate(data, thestring);

  if (error) {
      res.status(401).json({ success: false, error: error.details });
  } else {
    FUNC.exerciseTwo(data, res);
  }

});

module.exports = router;