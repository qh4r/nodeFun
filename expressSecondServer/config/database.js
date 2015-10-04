var mongoose = require('mongoose')

function connect(connectionString){
    mongoose.connect(connectionString);

    var db = mongoose.connection;

    db.on("error", console.error.bind(console, 'connection error'));
    db.once('open', function(){
        console.log("Mongoose connected using: " + connectionString);
    })


    //var magicItem = new Model({name: "Flaming Sword", power: 12, description: "Cut and seal the wound in a single swing!"})
    //magicItem.save(function(err){
    //    if(err) console.log("item not saved - error", err.message);
    //
    //    console.log("item saved! ", magicItem.name);
    //    getItem();
    //});
    //
    //function getItem(){
    //    Model.findOne({name: /Sword/}, function(err, result){
    //        if(err) return console.log("couldnt find items", err.message);
    //
    //        console.log("Odnaleziono: " + result.name +"!");
    //    })
    //}
}

module.exports = connect;

