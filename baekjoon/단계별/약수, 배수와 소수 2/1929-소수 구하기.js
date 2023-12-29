// 큰 범위가 주어졌을 때는 에라토스테네스의 체 방식을 사용하는 것이 호율적이다!
// 풀긴 풀었는데 의문점이 해소되지 않은 문제

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const set = new Set();

for (let i = 2; i <= Math.ceil(Math.sqrt(input[1])); i++) {
	if (set.has(i)) {
		continue;
	}
	for (let j = i ** 2; j <= input[1]; j += i) {
		set.add(j);
	}
}

const result = [];

for (let i = input[0]; i <= input[1]; i++) {
	if (!set.has(i)) result.push(i);
}
if (result.includes(1)) {
	result.shift();
}

console.log(result.join('\n'));

// const input = '1 1000000';
// let a = one(input);
// let b = two(input);
// let c = three(input);

// const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);
// console.log(equals(a, b));
// console.log(equals(b, c));
// console.log(equals(a, c));

// function one(q) {
// 	const input = q.split(' ').map(Number);

// 	function prime(num) {
// 		if (num < 2) return false;
// 		for (let i = 2; i <= Math.sqrt(num); i++) {
// 			if (num % i === 0) {
// 				return false;
// 			}
// 		}
// 		return true;
// 	}

// 	const result = [];

// 	for (let i = input[0]; i <= input[1]; i++) {
// 		if (prime(i)) result.push(i);
// 	}

// 	return result;
// }
// function two(q) {
// 	const input = q.split(' ').map(Number);
// 	const set = new Set();

// 	for (let i = 2; i <= Math.ceil(Math.sqrt(input[1])); i++) {
// 		if (set.has(i)) {
// 			continue;
// 		}
// 		for (let j = i ** 2; j <= input[1]; j += i) {
// 			set.add(j);
// 		}
// 	}

// 	const result = [];

// 	for (let i = input[0]; i <= input[1]; i++) {
// 		if (!set.has(i)) result.push(i);
// 	}
// 	if (result.includes(1)) {
// 		result.shift();
// 	}

// 	return result;
// }
// function three(q) {
// 	const [n, m] = q.split(' ').map((v) => Number(v));
// 	const prime = { 1: true };

// 	for (let i = 2; i <= Math.ceil(Math.sqrt(m)); i++) {
// 		if (prime[i]) {
// 			continue;
// 		}
// 		for (let j = i ** 2; j <= m; j += i) {
// 			prime[j] = true;
// 		}
// 	}

// 	const results = [];
// 	for (let i = n; i <= m; i++) {
// 		if (!prime[i]) {
// 			results.push(i);
// 		}
// 	}

// 	return results;
// }
