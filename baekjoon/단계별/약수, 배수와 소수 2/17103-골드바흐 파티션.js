const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
input.shift();

let max = Math.max(...input);
let arr = new Array(max + 1).fill(false);

for (let i = 2; i <= max; i++) {
	if (!arr[i]) {
		for (let j = i * i; j <= max; j += i) {
			arr[j] = true;
		}
	}
}

const result = [];

for (let num of input) {
	let cnt = 0;
	let half = Math.ceil(num / 2);
	if (num === 4) {
		cnt = 1;
	} else {
		for (let i = 3; i <= half; i += 2) {
			if (!arr[i] && !arr[num - i] && num - i != 1) {
				cnt++;
			}
		}
	}
	result.push(cnt);
}

console.log(result.join('\n'));
// function prime(num) {
// 	for (let i = 2; i < Math.sqrt(num); i++) {
// 		if (num % i === 0) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// function count(num) {
// 	let arr = [];
// 	let cnt = 0;
// 	for (let i = 4; i <= num; i++) {
// 		if (prime(num)) arr.push(num);
// 	}

// 	for (let i = 0; i < arr.length - 1; i++) {
// 		for (let j = i + 1; j < arr.length; j++) {
// 			if (arr[i] + arr[j] === num) cnt++;
// 		}
// 	}
// 	return cnt;
// }

// const result = [];

// for (let num of input) {
// 	result.push(count(num));
// }

// console.log(result.join('\n'));
