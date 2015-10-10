require('../testHelper');
var User = App.model('user');

//properta w callbacku it jest konieczna by mocha nie zakonczyla dziala przed koncem wykonania
describe(__filename, function () {
    it('hashes the user password', function (done) {
        var user = new User({email: 'dupa1@gmail.com', passwordHash: 'dupa1dupa'});
        user.save(function (err) {
            assert.ifError(err);

            assert(user.passwordHash);
            assert.notEqual(user.passwordHash, 'dupa1');
            done();

        })

    });

});