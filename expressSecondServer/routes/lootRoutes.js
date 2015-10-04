exports.showLoot = function showLoot(req, res) {
    res.render('loot/postLoot',{vm: {id : req.params.id}});
}
