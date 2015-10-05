/**
 * Created by qh4r on 06.10.15.
 */
var User = App.model('user');

exports.newUser = function (req, res) {
    res.render('users/newUser');
}

exports.createUser = function (req, res) {
    var newUser = new User({email: req.body.email});
    newUser.save(function (err) {
        if (err) {
            res.status(422).send('Error' + err.message);
        } else {
            res.status(200).send('User account created');
        }
    })
}