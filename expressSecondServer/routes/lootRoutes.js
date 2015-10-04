var ItemModel = App.model('magicItem')

exports.index = function (req, res) {
    ItemModel.find({}, function (err, result) {
        if (err)return res.status(422).send("Problem connecting to db", err.message);
        if(!result) return res.status(404).send("Couldn't find items")

        res.render('loot/index', {vm: {items: result}});

    })
}

exports.showLoot = function showLoot(req, res) {
    ItemModel.findById(req.params.id, function(err, result){
        console.log(err || result);
        var error = err || null, item = result || null;
        console.log('rendering...');
        res.render('loot/postLoot', {vm: {id: req.params.id, item: item, error: error}});
    })
}
