var fs = require('fs');

fs.readFile('toRead.txt', function(err, res){
console.log(res.toString());
console.log('read end');
});
console.log('code end');
