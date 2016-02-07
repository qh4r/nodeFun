const max = process.argv[2];

let fibinacci = (function*(){
	let cur = 1;
	while(cur <= max){				
		yield ('' + (cur % 3 === 0 ? 'Fizz' : '') 
		+ (cur % 5 === 0 ? 'Buzz' : '')) || cur;
		cur +=1;
	}
})();

for(var n of fibinacci) {
	console.log(n);
}