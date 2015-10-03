var express = require('express'),
    methodOverride = require('method-override'),
    bodyParser = require('body-parser'),
    handlers = require('./handlers'),
    middleware = require('./middleware'),
    helpers = require('./helpers'),
    routes = require('./routes')
app = express(),
    port = process.env['PORT'] || 3000;


middleware(app, express, bodyParser, methodOverride);


//SA WYWOLYWANE PO KOLEI (wszystkie dopasowane)

routes(app, handlers, helpers);

app.listen(port);


console.log('App started')
