const max = process.argv[2];

let FizzBuzz = {
	[Symbol.iterator](){
		let cur = 0;
		return{
			next() {
				[cur] = [cur + 1];
				if(cur <= max){				
					return {
						done: false,
						value:  ('' + (cur % 3 === 0 ? 'Fizz' : '') 
						+ (cur % 5 === 0 ? 'Buzz' : '')) || cur
					}
				}
				return {done: true}
			}
		}
	}
}

for(var n of FizzBuzz) {
	console.log(n);
}