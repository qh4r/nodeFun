/**
 * Created by qh4r on 06.10.15.
 */
var User = App.model('user');

exports.newUser = function (req, res) {
    res.render('users/newUser', {vm: {}});
}

exports.createUser = function (req, res) {
    var newUser = new User({
        email: req.body.email,
        passwordHash: req.body.password
    });
    newUser.save(function (err) {
        if (err) {
            res.status(422).send('Error' + err);
        } else {
            res.status(200).send('User account created');
        }
    })
}

exports.loginForm = function (req, res) {
    res.render('users/signIn', {vm: {}});
}

exports.signInAttempt = function (req, res) {
    var email = req.body.email, password = req.body.password;
    if (!email || !password) return res.render('users/signIn',
        {vm: {error: "Email and password can not be emoty"}});
    User.matchUserAndPassword(email, password, function (err, result) {
        if (err) return res.render('users/signIn', {vm: {error: err}});
        if (!result) return res.render('users/signIn',
            {vm: {error: "Provide valid email and password"}});
        req.session.usermail = result.email;
        res.redirect('/adventure');
    })
}