/**
 * Created by qh4r on 18.10.15.
 */

function attachCsrfToken(req, res, next){
    res.locals.csrfTokenFunction = req.csrfToken;
    next();
}

module.exports = attachCsrfToken;