const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
let sum = 0;
let line = 1;
while (true) {
	sum += line;
	if (input <= sum) {
		let a = line - (sum - input);
		let b = line + 1 - a;
		if (line % 2 === 0) {
			console.log(a + '/' + b);
		} else {
			console.log(b + '/' + a);
		}
	}
	line++;
}
