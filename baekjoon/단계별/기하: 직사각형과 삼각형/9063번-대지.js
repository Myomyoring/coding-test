const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();

const x = [];
const y = [];

input.forEach((el) => {
	let numArr = el.split(' ');
	x.push(+numArr[0]);
	y.push(+numArr[1]);
});

const xMin = Math.min(...x);
const xMax = Math.max(...x);
const yMin = Math.min(...y);
const yMax = Math.max(...y);

console.log((xMax - xMin) * (yMax - yMin));
