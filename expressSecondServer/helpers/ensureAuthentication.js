function ensureAuthentication(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        req.flash('error', 'Log in first');
        res.redirect('/signIn');
    }
}

module.exports = ensureAuthentication;