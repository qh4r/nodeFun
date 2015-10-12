function serializeUser() {
    return function _serilizeUser(user, cb) {
        console.log('serialize', user);
        cb(null, {'type': 'user', 'id': user.id.toString()})
    }
}

module.exports = serializeUser;