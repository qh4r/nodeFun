module.exports = function arrayMap(arr,fn){
	return arr.reduce(function(output, elem){
		output.push(fn(elem));
		return output;
	}, []);
}