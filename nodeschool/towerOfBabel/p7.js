console.log({
	[(()=> +process.argv[2] % 2 ===  0 ? "even" : "odd")()] : +process.argv[2],
	[((num1,num2)=> num1 + num2)(+process.argv[3],+process.argv[2])] : 
	((num1,num2)=> num1 + num2)(+process.argv[3],+process.argv[2])
});