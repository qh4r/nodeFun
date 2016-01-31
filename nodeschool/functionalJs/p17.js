function curryN(fn, n) {
	function getArg(arg){
		return isNaN(+arg) ? arg : +arg;
	}
	function curry(fn, depth){
		depth--;
		return depth === 0 ? function(){
				return fn(getArg(apt.slice.call(arguments,0,1)));
			} : function(){
				var newFn = fn.bind(null, getArg(apt.slice.call(arguments,0,1)));
				return curry(newFn, depth);
			};
	}
	var apt = Array.prototype;
	var depth = n || fn.length;
	return curry(fn, depth);
}

module.exports = curryN;