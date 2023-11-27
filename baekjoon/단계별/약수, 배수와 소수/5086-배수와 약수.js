const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((el) => el.split(' ').map(Number));
for (let num of input) {
	if (num[0] === num[1]) {
		break;
	} else {
		num[0] % num[1] === 0
			? console.log('multiple')
			: num[1] % num[0] === 0
			? console.log('factor')
			: console.log('neither');
	}
}
