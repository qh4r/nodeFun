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