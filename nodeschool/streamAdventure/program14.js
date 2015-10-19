var crypto = require('crypto');
var cypher = crypto.createDecipher('aes256', process.argv[2])

process.stdin.pipe(cypher).pipe(process.stdout);