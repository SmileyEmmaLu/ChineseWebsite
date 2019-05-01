var express = require('express');
var router = express.Router();
var path = require("path");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {ttl: 'Mandarin'}) });

router.get('/tutoring', function(req, res, next) {
  res.render('tutoring', {ttl: 'Peer Tutoring'}) });

router.get('/resources', function(req, res, next) {
  res.render('resources', {ttl: 'Online Resources'})});

router.get('/entertainment', function(req, res, next) {
  res.render('entertainment', {ttl: 'Entertainment'}) });



module.exports = router;
