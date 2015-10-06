/**
 * Created by qh4r on 06.10.15.
 */
var mongoose = require('mongoose'),
    validate = require('mongoose-validate');

function simpleEmailValidator(input) {
    return /^.+@[^.]+.[^.]/.test(input);
}

//zamaist gotowego validate.email mozna uzyc powyzszej funkcji
var userSchema = new mongoose.Schema({
    email: {type: String, unique: 1, required: 1,
        validate: [validate.email, 'Email must be of correct format']}
});

userSchema.set('autoIndex', App.env !== 'production');

var userModel = mongoose.model('user', userSchema);

module.exports = userModel;