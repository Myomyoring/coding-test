const str = require('fs').readFileSync('/dev/stdin').toString().trim().toLowerCase();
let obj = {};
let max = 0;
for (let el of str) {
	obj[el] ? (obj[el] += 1) : (obj[el] = 1);
}
for (let el of Object.keys(obj)) {
	max = Math.max(max, obj[el]);
}

const alpha = Object.keys(obj).filter((k) => obj[k] === max);
console.log(alpha.length > 1 ? '?' : alpha.toString().toUpperCase());
