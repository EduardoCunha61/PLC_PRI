var mongoose = require("mongoose");
var passport = require("passport");
var User = require("../models/User");

var userController = {};

// Restrict access to root page
userController.home = function(req, res) {
  res.render('index', { user : req.user });
};

// Go to registration page
userController.register = function(req, res) {
  res.render('registo');
};

// Post registration
userController.doRegister = function(req, res) {
  var atividade = 
  User.register(new User({ username : req.body.username, name: req.body.name, atividades:[] }), req.body.password, function(err, user) {
    if (err) {
      return res.render('registo', { user : user });
    }
      res.redirect('/');

  });
};

// Go to login page
userController.login = function(req, res) {
  res.render('login');
};

// Post login
userController.doLogin = function(req, res) {
  passport.authenticate('local')(req, res, function () {
    res.redirect('/perfil');
  });
};

// logout
userController.logout = function(req, res) {
  req.logout();
  res.redirect('/');
};

module.exports = userController;