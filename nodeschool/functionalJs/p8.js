  function duckCount() {
     var args = Array.prototype.slice.call(arguments);
	 return args.reduce(function(sum,arg){
		 return sum + (Object.prototype.hasOwnProperty.call(arg, 'quack') ? 1 : 0);
	 },0);
    }

    module.exports = duckCount