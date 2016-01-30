function repeat(operation, num){
	if(num <=0) return;
	operation();
	return trampoline(repeat.bind(null,operation, --num));
}

function trampoline(fn){
	setImmediate(fn);
}

module.exports = function(operation, num) {
	return repeat(operation, num);
}