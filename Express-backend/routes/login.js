var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var router = express.Router();




router.get('/login', function(req, res) {
    res.send({ user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

module.exports = router;