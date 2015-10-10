/**
 * Created by qh4r on 09.10.15.
 */
process.env.NODE_ENV = 'test';
require('../config/application');

var async = require('async'),
    mongoose = require('mongoose');
global.assert = require('assert');

//czysci baze za kazdym razem
App.Test = {
    clearDb: function (done) {
        var models = ['user'];

        async.each(models, function (modelName, cb) {
            var model = mongoose.model(modelName);
            model.remove({}, cb);
        }, function (err) {
            assert.ifError(err);
            done();
        })
    }
}
//before each to jeden z hookow mochy. Ten znajduje sie w kontekscie globalnym
//poza jakimkolwiek blokiem describe wiec wykonywany jest zawsze
beforeEach(function(done){
    App.Test.clearDb(done);
})