var employees = require('../models/employees');
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();


/* GET ALL employees */
router.get('/', function(req, res, next) {
    employees.find(function (err, employees) {
      if (err) return next(err);
      res.json(employees);
    });
  });
  
/* GET SINGLE employees BY ID */
router.get('/:id', function(req, res, next) {
    employees.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

  /* SAVE employees */
router.post('/', function(req, res, next) {
    employees.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

  /* UPDATE employees */
router.put('/:id', function(req, res, next) {
    console.log(req.body);
    employees.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* DELETE employees */
router.delete('/:id', function(req, res, next) {
    employees.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  module.exports = router;
