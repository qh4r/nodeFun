/**
 * Created by qh4r on 17.10.15.
 */
var mongoose = require('mongoose'),
    REQUIRED_CHARACTER_NAME_LENGTH = 3;

function validateNameLength(value) {
    return value && value.length >= REQUIRED_CHARACTER_NAME_LENGTH
}

var schema = mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    name: {type: String, required: true, unique: true, default: '', validate: validateNameLength}
});

schema.set('autoIndex', App.env !== 'production');

schema.methods.avatar = function () {
    return '/images/sword_and_shield.png'
}

var Model = mongoose.model('Character', schema);

module.exports = Model;