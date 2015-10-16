/**
 * Created by qh4r on 15.10.15.
 */

function setFlash(req, res, next) {
    res.locals.flash = {
        notice: req.flash('notice') + req.flash('success'),
        error: req.flash('error')
    };
    next();
}

module.exports = setFlash;