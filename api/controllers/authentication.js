var passport = require('passport');
var mongoose = require('mongoose');

var User = mongoose.model('User');


// helper method from Getting MEAN
//
var sendJSONresponse = (res, status, content) => {
    res.status(status);
    res.json(content);
}

module.exports.register = (req, res) => {
    // validate required fields

    console.log(req);
    if (!req.body.name || !req.body.email || !req.body.password) {
        sendJSONresponse(res, 400, {
            "message": "All fields required"
        });
        return;
    }

    // create new model instance
    var user = new User();

    // debug stuff
    console.log(`name = ${req.body.name}, email = ${req.body.email}, pass = ${req.body.password}`);

    // set name, email and password
    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);

    // save the user 
    user.save(function (err) {
        var token;
        if (err) {
            sendJSONresponse(res, 404, err);
        } else {
            // return json web token
            token = user.generateJwt();
            sendJSONresponse(res, 200, {
                "token": token
            });
        }
    });
};

module.exports.login = (req, res) => {
    // check the existence of the required data
    if(!req.body.email || !req.body.password) {
        sendJSONresponse(res, 400, {
            "message":"All fields required"
        })
    }

    passport.authenticate('local', function(err, user, info) {
        var token;

        if(err) {
            sendJSONresponse(res, 404, err);
            return;
        }

        if(user) {
            token = user.generateJwt();
            sendJSONresponse(res, 200, {
                "token": token
            });
        } else {
            sendJSONresponse(res, 401, info);
        }        

    }) (req, res);
};