const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let i = 1;
let j = 1;
while (i < input) {
	i += 6 * j;
	j++;
}
console.log(j);
