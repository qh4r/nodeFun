exports.getAdventure = function getAdventure(req, res) {
    var user = {
        name: 'qh4r'
    };
    res.render('adventure/getAdventure', {user: user});
};

exports.postAdventure = function postAdventure(req, res) {
    res.render('adventure/postAdventure');
};

exports.updateAdventure = function updateAdventure(req, res) {
    res.render('adventure/updateAdventure');
}