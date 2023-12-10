const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const cards = input[1].split(' ').map(Number);
cards.sort((a, b) => b - a);

let arr = [];

for (let i = 0; i < n - 2; i++) {
	for (let j = i + 1; j < n - 1; j++) {
		for (let k = j + 1; k < n; k++) {
			sum = cards[i] + cards[j] + cards[k];
			if (sum <= m) {
				arr.push(sum);
			}
		}
	}
}
console.log(Math.max(...arr));

// for (let i = 0; i < n; i++) {
// 	for (let j = i + 1; j < n - 1; j++) {
// 		let tmp = 0;
// 		if (cards[j]) {
// 			tmp += cards[i] + cards[j];
// 			if (cards[j + 1]) {
// 				tmp += cards[j + 1];
// 				tmp <= m && arr.push(tmp);
// 			}
// 		}
// 	}
// }
