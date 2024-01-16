const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let result = '';
for (let i = 0; i < input.length; i++) {
	let code = input.charCodeAt(i);
	code = code < 97 ? code + 32 : code - 32;
	result += `${String.fromCharCode(code)}`;
}
