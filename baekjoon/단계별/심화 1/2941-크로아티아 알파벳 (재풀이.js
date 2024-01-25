let str = require('fs').readFileSync('/dev/stdin').toString().trim();
const croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
let result = 0;
croatia.forEach((c) => {
	while (str.includes(c)) {
		str = str.replace(c, ' ');
		result++;
	}
});

console.log((result += str.replaceAll(' ', '').length));
