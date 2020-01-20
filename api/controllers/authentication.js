var passport = require('passport');
var mongoose = require('mongoose');

var User = mongoose.model('User');


// based on authentication section in Getting MEAN by Simon Holmes
//
module.exports.register = (req, res) => {

    if (!req.body.name || !req.body.email || !req.body.password) {
        res.status(400).json({
            "message": "All fields required"
        });
        return;
    }

    var user = new User();

    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);

    user.save(function (err) {
        var token;
        if (err) {
            res.status(400).json(err);
        } else {
            token = user.generateJwt();
            res.status(201).json({
                "token": token
            });
        }
    });
};

module.exports.login = (req, res) => {

    if (!req.body.email || !req.body.password) {
        res.status(400).json({
            "message": "ERROR: All fields are required"
        });
    }

    passport.authenticate('local',
        function (error, user, info) {
            var token;

            if (error) {
                res.status(404).json(err);
                console.log(err);
                return;
            }

            if (user) {
                token = user.generateJwt();
                res.status(200).json({
                    "token": token
                });
            } else {
                res.status(401).json({
                    "token": token
                });
            }
        })(req, res);
};