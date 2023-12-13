const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let cnt = 1;
let result = 666;

while (cnt !== Number(input)) {
	result++;
	if (String(result).includes('666')) {
		cnt++;
	}
}
console.log(result);
