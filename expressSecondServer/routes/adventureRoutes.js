exports.getAdventure = function getAdventure(req, res) {
    var user = {
        name: req.session.usermail || ''
    };
    console.log('mail: ' + req.session.usermail);
    res.render('adventure/getAdventure', {user: user});
};

exports.postAdventure = function postAdventure(req, res) {
    res.render('adventure/postAdventure');
};

exports.updateAdventure = function updateAdventure(req, res) {
    res.render('adventure/updateAdventure');
}