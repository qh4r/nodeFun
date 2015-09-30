var express = require('express'),
    app = express(),
    port = process.env['PORT'] || 3000;

app.get("/", function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.send("<html><head><title>home</title></head><body><h1>Start</h1><a href='/adventure'>Go to Adventure</a></body></html>")
})

app.get("/adventure", function (req, res) {
    res.setHeader("Content-Type", 'text/html')
    res.send("<html><head><title>Adventure</title></head><body><h1>Are ye bravez?</h1><form action='adventure'" +
        " method='POST'><button type='submit'>Yes I am bravez</button></form></body></html>")
})

app.post("/adventure", function (req, res) {
    res.setHeader("Content-Type", 'text/html')
    res.send("<html><head><title>Adventures - NodeSlash</title></head><body><h1>Thou hast bravez.</h1><form action='adventure'" +
        " method='POST'><button type='submit'>Again!</button></form><p>You have found some <a href='/loot/1'>loot.</a></p></body></html>")
})

function updateAdventure(req,res) {
    res.setHeader("Content-Type", 'text/html')
    res.send("<html><head><title>Adventures - NodeSlash</title></head><body><h1>It's a secret to everybody.</h1></body></html>")
}

function showLoot(req,res) {
    var id = req.params.id

    res.setHeader("Content-Type", 'text/html')
    res.send("<html><head><title>Adventures - NodeSlash</title></head><body><h1>Ogre-slaying knife</h1><p>It has +9 against ogres. It was id #" + id + "</p></body></html>")
}

app.put('/adventures/:id', updateAdventure);

app.get('/loot/:id', showLoot);

app.listen(port);

console.log('App started')
