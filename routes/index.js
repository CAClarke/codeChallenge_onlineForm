var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var User = require('../models/users');

/* GET home page. */
router.get('/', function(req, res, next) {

  User.find({}, function(error, users){
    console.log(users);
      if(error){
          res.send(error);
      }
      else{
          res.render('pages/index',{users:users}
        )};
    res.render('pages/index', { title: 'Express' });
  });
});

//uploads handler
router.post('/users', function(req, res, next) {
    var user = new User();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.emailAddress = req.body.emailAddress;

    user.save(function(err){
      if (err) return handleError(err);

      res.redirect('/');
    });   
});

module.exports = router;