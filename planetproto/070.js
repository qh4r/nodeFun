// -> Define an object called 'Robot'
// -> Define a method called 'new' in Robot
// -> When Robot.new is called it should return a new object with Robot as its prototype 
//    e.g. var robby = Robot.new();
//    Robot should be the prototype of robby

var Robot = {
	new : function(){
		return Object.create(this);
	}
}

var robby = Robot.new();



// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	Robot: Robot
}
