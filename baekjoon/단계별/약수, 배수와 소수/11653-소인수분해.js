let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

const result = [];
let idx = 2;

while (input >= 2) {
	if (input % idx === 0) {
		result.push(idx);
		input = input / idx;
	} else {
		idx++;
	}
}

console.log(result.join('\n'));
