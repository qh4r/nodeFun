function serializeUser() {
    return function _serilizeUser(user, cb) {
        console.log('serialize', user);
        cb(null, {type: 'user', id: user._id});
    }
}

module.exports = serializeUser;