exports.home = function home(req, res) {
    res.setHeader("Content-Type", "text/html");
    res.send('<html>' +
        '<head>' +
        '<title>home</title>' +
        '</head>' +
        '<body>' +
        '<h1>Start</h1>' +
        '<img src="img/rafalAsia.png"/>'
        + '<p><form action="/login" method="POST"><label for="username">Username</label><input id="username" type="text" ' +
        'name="username"><button type="submit">Start ye adventures!</button></form></p>' +
            //'<div><a href="/adventure">Go to Adventure</a></div>' +
        '</body>' +
        '</html>');
};

exports.getAdventure = function getAdventure(req, res) {
    res.setHeader("Content-Type", 'text/html')
    res.send("<html><head><title>Adventure</title></head><body><h1>Are ye bravez " + req.session.user + "?</h1><form action='/adventure'" +
        " method='POST'><button type='submit'>Yes I am bravez</button></form></body></html>")
};

exports.postAdventure = function postAdventure(req, res) {
    res.setHeader("Content-Type", 'text/html')
    res.send('<html><head><title>Adventures - NodeSlash</title></head><body><h1>Thou hast bravez.</h1><form action="/adventure"' +
        ' method="POST"><button type="submit">Again!</button></form>' +
        '<form action="/adventure/42?_method=PUT" method="POST"><input type="hidden" name="_method" value="PUT"><button type="submit">Cheat!</button></form>' +
        '<p>You have found some <a href="/loot/1">loot.</a></p></body></html>')
    //console.log("adventure");
};

exports.updateAdventure = function updateAdventure(req, res) {
    res.setHeader("Content-Type", 'text/html')
    res.send("<html><head><title>Adventures - NodeSlash</title></head><body><h1>It's a secret to everybody.</h1></body></html>")
    //console.log("updateAdventure");

}

exports.showLoot = function showLoot(req, res) {
    var id = req.params.id

    res.setHeader("Content-Type", 'text/html')
    res.send("<html><head><title>Adventures - NodeSlash</title></head><body><h1>Ogre-slaying knife</h1><p>It has +9 against ogres. It was id #" + id + "</p></body></html>")
}

exports.login = function login(req, res) {
    if (req.body.username) {
        req.session.user = req.body.username
        res.redirect("/adventure")
    } else {
        res.redirect("/")
    }
}

exports.readError = function readError(req, res, next){
    console.log("throw error");
    next(new Error("wystapil blad podczas odczytu"));
}