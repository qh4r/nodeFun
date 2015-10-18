var fs = require('fs');
var result = fs.readFileSync(process.argv[2]).toString();
console.log(result.split(/\n./).length-1);