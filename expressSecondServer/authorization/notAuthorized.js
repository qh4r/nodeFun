/**
 * Created by qh4r on 17.10.15.
 */

var auth = require('authorized');

module.exports = function notAuthorized(err, res, next) {
    if (err instanceof auth.UnauthorizedError) {
        res.send(401, 'Unauthorized');

    } else {
        next(err);
    }
}
