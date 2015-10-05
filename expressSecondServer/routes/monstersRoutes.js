var Monster = App.model('monster');

function checkForFilledBody(res, action) {
    return res.render('monsters/addMonster', {
        vm: {error: 'Name and description can not be empty'},
        postAction: action
    });
}

exports.showMonsters = function (req, res) {
    Monster.find(function (err, result) {
        var error = err || null, monsters = result || null;
        res.render('monsters/monsters', {vm: {monsters: monsters, error: error}});
    })
}

exports.addMonster = function (req, res) {
    var error = req.params.error || null;
    res.render('monsters/addMonster', {vm: {error: error, postAction: '/saveMonster'}});
}

exports.saveMonster = function (req, res) {
    var name = req.body.mname || null, description = req.body.mdescription || null;
    if (!name || !description)
        checkForFilledBody(res, '/saveMonster')
    var monster = new Monster({name: name, description: description});
    monster.save(function (err) {
        if (err)
            return res.render('monsters/addMonster', {vm: {error: err, postAction: '/saveMonster'}});
        res.redirect('/monsters');
    })
}

exports.deleteMonster = function (req, res) {
    var monsterId = req.params.id || null;
    if (!monsterId) return res.render('monsters/monster', {vm: {error: "Could not delete monster."}});
    Monster.findByIdAndRemove(monsterId, function (err) {
        if (err) return res.render('monsters/monster', {vm: {error: "Could not delete monster."}});
        res.redirect('/monsters');
    })
}

exports.showMonster = function (req, res) {
    var monsterId = req.params.id || null;
    if (!monsterId) return res.render('monsters/monster', {vm: {error: "No monster with given id"}});
    Monster.findById(monsterId, function (error, result) {
        var error = error || null, monster = result || null;
        res.render('monsters/monster', {vm: {error: error, monster: monster}});
    })

}

exports.editMonster = function (req, res) {
    var monsterId = req.params.id || null;
    if (!monsterId) return res.render('monsters/monster', {vm: {error: "Can't find monster to edit."}});
    Monster.findById(monsterId, function (err, result) {
        var error = err || null, monster = result || null;
        res.render('monsters/addMonster', {vm: {postAction: '/updateMonster', monster: monster, error: error}});
    })
}

exports.updateMonster = function (req, res) {
    var name = req.body.mname || null, description = req.body.mdescription || null,
        id = req.body.id || null;
    if(!name || !description || !id)
        checkForFilledBody(res, id ? '/editMonster/'+id : '/showMonster');
    Monster.findByIdAndUpdate(id, {$set: {name: name, description: description}},
        function(err){
           if(err) return res.render('monsters/monster', {vm:{error: err}});
            res.redirect('/monsters');
        });
}