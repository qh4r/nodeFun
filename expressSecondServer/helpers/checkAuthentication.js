/**
 * Created by qh4r on 16.10.15.
 */
function checkAuthentication(req, res, next) {
    res.locals.userAuthenticated = req.isAuthenticated();
    next();
}

module.exports = checkAuthentication;