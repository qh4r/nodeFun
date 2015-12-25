function countWords(inputWords) {
	return inputWords.reduce(function(sum, arg){
		if(sum.constructor === String){
			var temp = sum;
			sum = {};
			sum[temp] = sum[temp] ? sum[temp]+1 : 1;
		}
		sum[arg] = sum[arg] ? sum[arg]+1 : 1;
		return sum;
	});
}

module.exports = countWords;