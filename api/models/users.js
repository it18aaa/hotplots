var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');


var userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    articlelikes: {
        type: [String],
    },
    hash: String,
    salt: String
});

// Authentication methods associated with model
// Adapted from Getting MEAN by Simon Holmes
//
userSchema.methods.setPassword = function (password) {
    // create a random salt
    this.salt = crypto.randomBytes(16).toString('hex');
 
    // use the salt and password to create encrypted hash
    // requires digest
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('hex');
};

userSchema.methods.validatePassword = function (password) {

    // create a hash using the stored salt and the password passed
    var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('hex');

    // compare hashes,are they the same?
    return this.hash === hash;
};

// function to generate a Javascript Web Token
userSchema.methods.generateJwt = function () {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.sign({
            _id: this._id,
            email: this.email,
            name: this.name,
            exp: parseInt(expiry.getTime() / 1000)
        },
        process.env.JWT_SECRET);
};

// compile schema
mongoose.model("User", userSchema);