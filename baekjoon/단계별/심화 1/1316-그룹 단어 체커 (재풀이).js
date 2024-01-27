const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let result = input.shift();
for (let str of input) {
	for (let i = 0; i < str.length; i++) {
		if (str[i] !== str[i + 1] && str.slice(i + 1).includes(str[i])) {
			result--;
			break;
		}
	}
}
console.log(result);
