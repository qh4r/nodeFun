/**
 * Created by qh4r on 09.10.15.
 */
require('../testHelper.js');

var User = App.model('user'),
    supertest = require('supertest');


describe(__filename, function () {

    var Test;

    beforeEach(function () {
        Test = {};
    })

    describe('Have a user in database', function () {
        beforeEach(function (done) {
            Test.userData = {
                email: 'test@test.pl',
                password: 'testpass1'
            }
            Test.user = new User({email: Test.userData.email, passwordHash: Test.userData.password});
            Test.user.save(function (err) {
                assert.ifError(err);

                done();
            })
        });

        it('should create user when valid data is inputed', function (done) {
            supertest(App.app)
                .post('/signUp')
                .send({email: 'newuser@gmail.com', password: 'newuserpassword'})
                .expect(200)
                .end(function (err, res) {
                    if (err) {
                        console.log('Error' + err);
                        console.log(res.body);
                        assert.ifError(err);
                    } else {
                        User.find({email: 'newuser@gmail.com'}, function (err, users) {
                            assert.ifError(err);

                            assert(users);
                            assert(users[0]);
                            assert(users.length == 1);
                            assert.equal(users[0].email, 'newuser@gmail.com');
                            done();
                        });
                    }

                })
        })

        it('not create user when duplicate email', function (done) {
            supertest(App.app)
                .post('/signUp')
                .send({email: 'test@test.pl', password: 'newuserpassword'})
                .expect(422)
                .end(function (err, res) {
                    if (err) {
                        console.log('Error' + err);
                        console.log(res.body);
                        assert.ifError(err);
                    } else {
                       done()
                    }

                })
        })
    });

    it("should create new user", function (done) {

        var req = {
            body: {
                email: 'dupa@dupa.pl',
                password: 'qwerty12345'
            }
        }

        var res = {
            status: function (value) {
                this._status = value;
                return this;
            },
            send: function (message) {
                assert.equal(this._status, 200);
                assert.equal(message, 'User account created');

                User.count({}, function (err, res) {
                    assert.ifError(err);
                    assert.equal(res, 1);
                })

                User.find({}, function (err, res) {
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