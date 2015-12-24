function repeat(operation, num) {
	if(num > 0) {
		num--;
		operation();
		repeat(operation, num);
	}
}

module.exports = repeat;