// 좌표압축: 해당 좌표값보다 작은 좌표값들의 개수로 좌표값을 대체한다는 의미
function remove(arr) {
	let dup = new Set(arr);
	return [...dup];
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

const nums = input.join().split(' ').map(Number);
const arr = remove(nums);
let obj = {};
let result = '';

arr.sort((a, b) => a - b);
arr.forEach((num, idx) => {
	obj[num] = idx;
});
for (let i in nums) {
	result += `${obj[nums[i]]} `;
}

console.log(result);
