function getDependencies(tree){
	var output = {}, child = [];
	if(!tree || !tree.dependencies) return [];
	var keys = Object.keys(tree["dependencies"]);
	if(keys && keys.length){
		keys.forEach(function(key){
			output[key+'@'+tree["dependencies"][key].version] = 1;
			var child = getDependencies(tree["dependencies"][key]);
			if(child && child.length){
				child.forEach(function(elem){
					output[elem] = 1;				
				});
			}
		});
	}
	return Object.keys(output).sort();
}

module.exports = getDependencies;