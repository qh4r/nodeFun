var arg1 = process.argv[2];
var arg2 = process.argv[3];
import MyMath from './Math2'

console.log(MyMath.PI);
console.log(MyMath.sqrt(+arg1));
console.log(MyMath.square(+arg2));