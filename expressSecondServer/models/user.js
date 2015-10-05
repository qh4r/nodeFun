/**
 * Created by qh4r on 06.10.15.
 */
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email: {type: String, unique: 1}
});

userSchema.set('autoIndex', App.env !== 'production');

var userModel = mongoose.model('user', userSchema);

module.exports = userModel;