const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((el) => el.split(' '));

let result = [];

input[0][0] === input[1][0]
	? result.push(input[2][0])
	: input[0][0] === input[2][0]
	? result.push(input[1][0])
	: result.push(input[0][0]);

input[0][1] === input[1][1]
	? result.push(input[2][1])
	: input[0][1] === input[2][1]
	? result.push(input[1][1])
	: result.push(input[0][1]);

console.log(result.join(' '));
