/**
 * Created by qh4r on 06.10.15.
 */
var mongoose = require('mongoose'),
    validate = require('mongoose-validate'),
    bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 12,
    MIN_PASSWORD_LENGTH = 9;

function simpleEmailValidator(input) {
    return /^.+@[^.]+.[^.]/.test(input);
}

function checkPasswordLength(input) {
    return !!input && input.length >= MIN_PASSWORD_LENGTH;
}

//zamaist gotowego validate.email mozna uzyc powyzszej funkcji
var userSchema = new mongoose.Schema({
    email: {
        type: String, unique: 1, required: 1,
        validate: [validate.email, 'Email must be of correct format']
    },
    passwordHash: {
        type: String, required: 1,
        validate: [checkPasswordLength, "Password needs to be at last " + MIN_PASSWORD_LENGTH + " long"]
    }
});

userSchema.pre('save', function (next) {
    var self = this;

    if (!self.isModified('passwordHash')) return next();
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) next(err)
        bcrypt.hash(self.passwordHash, salt, function (err, hash) {
            if (err)next(err);
            self.passwordHash = hash;
            next();
        })
    })

});

userSchema.statics.matchUserAndPassword = function (email, password, cb) {
    var self = this;
    userModel.findOne({email: email}, function (err, result) {
        var user = result;
        if (err) return cb(err);
        if (!user) return cb(new Error('No such user'));
        bcrypt.compare(password, user.passwordHash, function (err, result) {
            return cb(err, result ? user : null);
        });
    });

}

userSchema.set('autoIndex', App.env !== 'production');

var userModel = mongoose.model('user', userSchema);

module.exports = userModel;