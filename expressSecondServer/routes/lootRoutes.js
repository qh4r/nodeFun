exports.showLoot = function showLoot(req, res) {
    var monsters = [
        {id: 0, name: "Giant Spider", strength: 3},
        {id: 1, name: "Gigantozaur", strength: 7},
        {id: 2, name: "Flaming Tiger", strength: 5},
        {id: 3, name: "Rageing Beast", strength: 5}
    ];

    var visibleMonsters = monsters.slice(0, req.params.id);

    res.render('loot/postLoot',{vm: {id : req.params.id, monsters: visibleMonsters}});
}
