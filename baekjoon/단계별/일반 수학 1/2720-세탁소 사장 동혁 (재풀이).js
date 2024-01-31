const [t, ...testCase] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const coins = [25, 10, 5, 1];
const result = [];

for (let tc of testCase) {
	let idx = 0;
	let cnt = 0;
	const cnts = [0, 0, 0, 0];
	while (tc > 0 && idx < 4) {
		if (tc < coins[idx]) {
			cnts[idx] = cnt;
			idx++;
			cnt = 0;
		} else if (tc === coins[idx]) {
			tc -= coins[idx];
			cnt++;
			cnts[idx] = cnt;
			cnt = 0;
		} else {
			tc -= coins[idx];
			cnt++;
		}
	}
	result.push(cnts);
}

console.log(result.map((el) => el.join(' ')).join('\n'));
