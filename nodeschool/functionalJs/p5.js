function checkUsersValid(goodUsers) {
	return function allUsersValid(submittedUsers) {
		return submittedUsers.map(function(user){
			return goodUsers.filter(function(goodUser){
				return goodUser.id === user.id;
			}).length > 0;
		}).reduce(function(sum, arg) {
			return sum && arg;
		});
	};
};

module.exports = checkUsersValid