/**
 * Created by qh4r on 18.10.15.
 */

function invalidCsrfToken(err, req, res, next) {
    if (err.code !== 'EBADCSRFTOKEN') return next(err)

    //tutaj obsługujemy błędy tokenu CSRF
    console.log(err);
    res.status(403);
    res.send('session expired or has been tempered with');

}

module.exports = invalidCsrfToken;