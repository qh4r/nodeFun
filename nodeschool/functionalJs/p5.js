function checkUsersValid(goodUsers) {
	return function allUsersValid(submittedUsers) {
		submittedUsers.map(function(user){
			var a = goodUsers.filter(function(goodUser){
				return goodUser.id === user.id;
			});
			console.log(a);
			return 	a.length === submittedUsers.length
		})
	};
};

module.exports = checkUsersValid