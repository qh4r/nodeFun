var env = process.env.NODE_ENV || 'development',
    packageJson = require("../package.json"),
    path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

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
    env: env,
    start: function () {
        if (!this.started) {
            this.started = true;
            this.app.listen(this.port);
            console.log("start aplikacji" + App.version + " na porice " + App.port + " w " + App.env);
        }
    }
};

//Jade

App.app.set('views', App.appPath('views'));
App.app.set('view engine', 'jade');
//App.app.locals({pretty: true});
App.app.locals({globalFunctions: App.helpers('globalFunctions')})


//Middleware
App.app.use(bodyParser());
App.app.use(methodOverride('_method'));
App.app.use(express.cookieParser());
App.app.use(express.cookieSession({secret: "it'sasecrettoeverybody", key: "session"}));
App.app.use(express.static(App.appPath('public')));
App.app.use(App.app.router);

App.routeHandlers = {
    homeRoutes: App.require('routes/homeRoutes'),
    adventureRoutes: App.require('routes/adventureRoutes'),
    lootRoutes: App.require('routes/lootRoutes'),
    monstersRoutes: App.require('routes/monstersRoutes')
}
console.log("aplikacja" + __dirname);
App.require('config/routes')(App.app, App.routeHandlers);