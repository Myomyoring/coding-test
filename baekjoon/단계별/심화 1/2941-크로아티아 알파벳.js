let input = require('fs').readFileSync('/dev/stdin').toString().trim();
const croatia = ['c=', 'c-', 'd-', 'lj', 'nj', 's=', 'z='];
const exception = ['dz='];

for (let i of exception) {
	input = input.split(i).join('/');
}

for (let j of croatia) {
	input = input.split(j).join('/');
}

console.log(input.length);
