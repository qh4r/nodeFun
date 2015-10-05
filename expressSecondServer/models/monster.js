var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var monsterSchema = new Schema({
    name: String,
    description: String
});

var monsterModel = mongoose.model('Monster', monsterSchema);

module.exports = monsterModel;