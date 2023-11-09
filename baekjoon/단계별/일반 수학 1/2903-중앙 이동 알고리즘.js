const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let dot = 2;
for (let i = 0; i < input; i++) {
	dot += Math.pow(2, i);
}
console.log(Math.pow(dot, 2));
