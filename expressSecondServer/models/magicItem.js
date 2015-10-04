var mongoose = require('mongoose');

var schema = mongoose.Schema({
    name: String,
    power: Number,
    description: String
});

var Model = mongoose.model("MagicItem", schema);

module.exports = Model;