var env = process.env.NODE_ENV || 'development',
    packageJson = require("../package.json"),
    path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    flash = require('connect-flash'),
    csurf = require('csurf');
//require na folder wyszukuje i odpala plik index.js znajdujacy sie w nim!!

console.log("loading , env: " + env + " mode");

global.App = {
    app: express(),
    port: process.env.PORT || 3000,
    version: packageJson.version,
    root: path.join(__dirname, '..'),
    appPath: function (path) {
        return this.root + '/' + path;
    },
    require: function (path) {
        return require(this.appPath(path))
    },
    helpers: function (path) {
        return require(this.root + '/helpers/' + path);
    },
    model: function (path) {
        return require(this.root + '/models/' + path);
    },
    command: function(path){
        return require(this.root + '/commands/' + path);
    },
    routes: function (path) {
        return require(this.root + '/routes/' + path);
    },
    env: env,
    start: function () {
        if (!this.started) {
            this.started = true;
            this.app.listen(this.port);
            console.log("start aplikacji" + App.version + " na porice " + App.port + " w " + App.env);
        }
    }
};
//
//App.auth = require('../authorization/accessControl');

//console.log(__dirname);
//console.log(App.root);
////Jade
//
App.app.set('views', App.appPath('views'));
App.app.set('view engine', 'jade');
//App.app.locals({pretty: true});
App.app.set('trust proxy', 1);
App.app.locals.globalFunctions = App.helpers('globalFunctions');
//
//
////mongo
App.require('config/database')(process.env.DATABASE_URL || 'mongodb://localhost/node_' + App.env);
//
////Middleware
//

App.app.use(require('cookie-session')({secret: "dupa bladaa", key: "session"}));
//App.app.use(session({
//    secret: 'dupa bladaa',
//    saveUninitialized: true,
//    resave: true,
//    cookie: {secure: false, maxAge: 12000}
//}));
App.app.use(require('cookie-parser')('dupa bladaa'));
//App.app.use(csurf({cookie: true}));
App.protection = csurf({cookie: true});

if (App.env === 'test') {
    App.app.use(bodyParser.json());
} else {
    App.app.use(bodyParser.urlencoded({
        extended: true,
    }));
}

////less

var lessMiddleware = require('less-middleware'),
    lessMiddlewareOptions = {
        dest: App.appPath('/public'),
        relativeUrls: true,
        force: App.env === 'development',
        once: App.env !== 'development',
        debug: App.env === 'development',
        preprocess: {
            path: function(pathname, req){
                return pathname.replace('/stylesheets', '')
            }
        }
    },
    lessParserOptions = {
        dumpLineNumbers: 'comments'
    },
    lessCompilerOptions = {
        compress: App.env !== 'development'
    };

App.app.use(lessMiddleware(
    App.appPath('/stylesheets'),
    lessMiddlewareOptions,
    lessParserOptions,
    lessCompilerOptions
));
App.app.use(methodOverride('_method'));
App.require('/config/initializers/passport.js')();
App.app.use(App.helpers('checkAuthentication'));
App.app.use(flash());
App.app.use(express.static(App.appPath('public')));
App.app.use(App.helpers('setFlash'));
////App.app.use(App.app.router);

//
//App.app.use(require('../authorization/notAuthorized.js'));
App.routeHandlers = {
    homeRoutes: App.require('routes/homeRoutes'),
    adventureRoutes: App.require('routes/adventureRoutes'),
    lootRoutes: App.require('routes/lootRoutes'),
    monstersRoutes: App.require('routes/monstersRoutes'),
    usersRoutes: App.require('routes/usersRoutes')
}
console.log("aplikacja" + __dirname);
//console.log(router);
App.require('config/routes')(express, App.routeHandlers, App.auth);
//App.require('config/routes')(App.app, App.routeHandlers, App.auth);
