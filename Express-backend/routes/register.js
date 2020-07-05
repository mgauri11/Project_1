var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var router = express.Router();



router.get('/register', function(req, res) {
    res.send("Hello World from Register endpoint");
});

router.post('/register', function(req, res) {
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
            return res.send({ account : account });
        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
});
module.exports = router;