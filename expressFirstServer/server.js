var express = require('express'),
    methodOverride = require('method-override'),
    bodyParser = require('body-parser');
app = express(),
    port = process.env['PORT'] || 3000;


function home(req, res) {
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

function getAdventure(req, res) {
    res.setHeader("Content-Type", 'text/html')
    res.send("<html><head><title>Adventure</title></head><body><h1>Are ye bravez " + req.session.user + "?</h1><form action='/adventure'" +
        " method='POST'><button type='submit'>Yes I am bravez</button></form></body></html>")
};

function postAdventure(req, res) {
    res.setHeader("Content-Type", 'text/html')
    res.send('<html><head><title>Adventures - NodeSlash</title></head><body><h1>Thou hast bravez.</h1><form action="/adventure"' +
        ' method="POST"><button type="submit">Again!</button></form>' +
        '<form action="/adventure/42?_method=PUT" method="POST"><input type="hidden" name="_method" value="PUT"><button type="submit">Cheat!</button></form>' +
        '<p>You have found some <a href="/loot/1">loot.</a></p></body></html>')
    //console.log("adventure");
};

function updateAdventure(req, res) {
    res.setHeader("Content-Type", 'text/html')
    res.send("<html><head><title>Adventures - NodeSlash</title></head><body><h1>It's a secret to everybody.</h1></body></html>")
    //console.log("updateAdventure");

}

function showLoot(req, res) {
    var id = req.params.id

    res.setHeader("Content-Type", 'text/html')
    res.send("<html><head><title>Adventures - NodeSlash</title></head><body><h1>Ogre-slaying knife</h1><p>It has +9 against ogres. It was id #" + id + "</p></body></html>")
}

function login(req, res) {
    if (req.body.username) {
        req.session.user = req.body.username
        res.redirect("/adventure")
    } else {
        res.redirect("/")
    }
}

function notFound(req, res){
    res.setHeader("Content-Type", "text/plain");
    res.send(404,"Nie znaleziono!");
}

function catchError(err, req, res, next){
    console.log("there was an error " + err);
    next(err);
}

function showErrorPage(err, req, res, next){
    console.log("show error: "+err)
    res.setHeader("Content-Type", "text/plain");
    res.send(500, "Error occured: \n "+ err);
    next();
}

function readError(req, res, next){
    console.log("throw error");
    next(new Error("wystapil blad podczas odczytu"));
}
//middleware

function myLogger(options) {
    return function (req, res, next) {
        console.log(req.path);
        next();
    }
}

function checkAuthentication(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/');
    }
}

//middleware wywoływane jest w pipie. Kolejność ma znaczenie, pierwsze obsługuje najpierw. Jeśli router nie zostanie
// zdefiniowany to zostanie zainicjalizowany podczas pierwszego wywołania get/post.
app.use(bodyParser());
app.use(methodOverride('_method'));
app.use(express.cookieParser())
app.use(express.cookieSession({secret: "it'sasecrettoeverybody", key: "session"}))
app.use('/', myLogger());
app.use(express.static(__dirname + '/public'));
app.use(app.router);
app.use(notFound);
app.use(catchError);
app.use(showErrorPage);

//SA WYWOLYWANE PO KOLEI (wszystkie dopasowane)

app.get("/", home);

app.post('/login', login);

app.get('/read', readError);

app.all("*", checkAuthentication);
//app.get("/", checkAuthentication);

app.get("/adventure", getAdventure);
//app.get("/adventure", checkAuthentication, getAdventure);

app.post("/adventure", postAdventure);

app.put('/adventure/:id', updateAdventure);

app.get('/loot/:id', showLoot);

app.listen(port);


console.log('App started')
