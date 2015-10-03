var express = require('express'),
    methodOverride = require('method-override'),
    app = express(),
    port = process.env['PORT'] || 3000;

app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

app.get("/", function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.send("<html>" +
        "<head>" +
        "<title>home</title>" +
        "</head>" +
        "<body>" +
        "<h1>Start</h1>" +
        "<img src='img/rafalAsia.png'/>"
        + "<div><a href='/adventure'>Go to Adventure</a></div>" +
        "</body>" +
        "</html>");
})

app.get("/adventure", function (req, res) {
    res.setHeader("Content-Type", 'text/html')
    res.send("<html><head><title>Adventure</title></head><body><h1>Are ye bravez?</h1><form action='/adventure'" +
        " method='POST'><button type='submit'>Yes I am bravez</button></form></body></html>")
})

app.post("/adventure", function (req, res) {
    res.setHeader("Content-Type", 'text/html')
    res.send('<html><head><title>Adventures - NodeSlash</title></head><body><h1>Thou hast bravez.</h1><form action="/adventure"' +
        ' method="POST"><button type="submit">Again!</button></form>' +
        '<form action="/adventure/42?_method=PUT" method="POST"><input type="hidden" name="_method" value="PUT"><button type="submit">Cheat!</button></form>' +
        '<p>You have found some <a href="/loot/1">loot.</a></p></body></html>')
    console.log("adventure");
})

function updateAdventure(req, res) {
    res.setHeader("Content-Type", 'text/html')
    res.send("<html><head><title>Adventures - NodeSlash</title></head><body><h1>It's a secret to everybody.</h1></body></html>")
    console.log("updateAdventure");

}

function showLoot(req, res) {
    var id = req.params.id

    res.setHeader("Content-Type", 'text/html')
    res.send("<html><head><title>Adventures - NodeSlash</title></head><body><h1>Ogre-slaying knife</h1><p>It has +9 against ogres. It was id #" + id + "</p></body></html>")
}

app.put('/adventure/:id', updateAdventure);

app.get('/loot/:id', showLoot);

app.listen(port);

console.log('App started')
