var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

//create schema for db 
var usersSchema = mongoose.Schema ({
  firstName: String,
  lastName: String,
  emailAddress: String
});
//create model from schema
var User = mongoose.model('User', usersSchema);

module.exports = User;