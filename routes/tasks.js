var tasks = require('../models/Tasks');
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();


/* GET ALL tasks */
router.get('/', function(req, res, next) {
    tasks.find(function (err, tasks) {
      if (err) return next(err);
      res.json(tasks);
    });
  });
  
/* GET SINGLE tasks BY ID */
router.get('/:id', function(req, res, next) {
    tasks.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

  /* SAVE tasks */
router.post('/', function(req, res, next) {
    tasks.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

  /* UPDATE tasks */
router.put('/:id', function(req, res, next) {
    console.log(req.body);
    tasks.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* DELETE tasks */
router.delete('/:id', function(req, res, next) {
    tasks.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  module.exports = router;
