function loadUsers(usersIds, load, done) {
	var users = [], count = 0;
	usersIds.forEach(function(userId, index){
		load(userId, function(user){
			users.push(user);
// 			lepsze
// 			users[index] = user
			if(++count === usersIds.length){
				done(users);
			}
		});
	});
}

module.exports = loadUsers;