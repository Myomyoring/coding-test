let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
let cnt = 0;

while (true) {
	if (input % 5 === 0) {
		console.log(input / 5 + cnt);
		break;
	}

	if (0 > input) {
		console.log(-1);
		break;
	}

	cnt++;
	input -= 3;
}
