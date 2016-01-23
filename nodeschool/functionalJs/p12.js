function Spy(target, method){
	this.count = 0;
	var that = this;
	var oldMethod = target[method];
	target[method] = function(){
		that.count++;
		return oldMethod.apply(target,arguments);
	};
	return this;
}
module.exports = Spy;