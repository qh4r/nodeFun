console.log(process.argv.reduce(function(prev, curr){
prev = Number(prev) || 0;
return prev + Number(curr) || 0;
}));