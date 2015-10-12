var User = App.model('user');
function deserializeUser() {
    return function _deserializeUser(obj, cb) {
        console.log('deserialize', obj);
        User.findOne({_id: obj.id}, function (err, res) {
            cb(err, res);
        });
    }
}

module.exports = deserializeUser;