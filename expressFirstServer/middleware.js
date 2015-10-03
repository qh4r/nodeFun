function notFound(req, res) {
    res.setHeader("Content-Type", "text/plain");
    res.send(404, "Nie znaleziono!");
}

function catchError(err, req, res, next) {
    console.log("there was an error " + err);
    next(err);
}

function showErrorPage(err, req, res, next) {
    console.log("show error: " + err)
    res.setHeader("Content-Type", "text/plain");
    res.send(500, "Error occured: \n " + err);
    next();
}


//middleware

function myLogger(options) {
    return function (req, res, next) {
        console.log(req.path);
        next();
    }
}


//middleware wywoływane jest w pipie. Kolejność ma znaczenie, pierwsze obsługuje najpierw. Jeśli router nie zostanie
// zdefiniowany to zostanie zainicjalizowany podczas pierwszego wywołania get/post.
module.exports = function (app, express, bodyParser, methodOverride) {
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
};