var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');

// configure a local strategy

// pretty much lifted from Getting MEAN by Simon Holmes
passport.use(new LocalStrategy({
        usernameField: 'email'
    },
    function (username, password, done) {
        // search mongo for user with email
        User.findOne({
            email: username
        }, function (err, user) {
            // there was an error
            if (err) {
                return done(err);
            }
            // no user found
            if (!user) {
                return done(null, false, {
                    message: 'Incorrect username.'
                });            
            }
            // check password
            if (!user.validatePassword(password)) {
                return done(null, false, {
                    message: "Incorrect Password."
                });
            }
            // all okay, return user
            return done(null, user);
        })
    }
));