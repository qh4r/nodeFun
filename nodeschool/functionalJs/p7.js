    function reduce(arr, fn, initial) {
		var i = 0;
		if(!initial){
			initial = arr[i];
			i++;
		}
		var result = fn(initial, arr[i]);
		i++;
		var next = arr.slice(i);
		return next.length > 0 ? reduce(next, fn, result) : result;
    }

    module.exports = reduce;