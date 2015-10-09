/**
 * Created by qh4r on 09.10.15.
 */
require('../testHelper.js');

var User = App.model('user');

describe(__filename, function(){
    it("should create new user", function(done){

        var req = {
            body: {
                email: 'dupa@dupa.pl',
                password: 'qwerty12345'
            }
        }

        var res = {
            status: function(value){
                this._status = value;
                return this;
            },
            send: function(message){
                assert.equal(this._status, 200);
                assert.equal(message,'User account created');

                User.count({}, function(err, res){
                    assert.ifError(err);
                    assert.equal(res, 1);
                })

                User.find({}, function(err, res){
                    assert.ifError(err);
                    assert.equal(res[0].email, 'dupa@dupa.pl');
                    done();
                })
            }
        }

        var userRoutes = App.routes('usersRoutes');

        userRoutes.createUser(req, res)

    })
})