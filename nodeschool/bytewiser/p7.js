var integer = process.argv[2];
var array32 = new Uint32Array([integer]);
var array16 = new Uint16Array(array32.buffer);
console.log(JSON.stringify(array16));