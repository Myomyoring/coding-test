const input = BigInt(require('fs').readFileSync('/dev/stdin').toString().trim());
const result = ((input - BigInt(2)) * (input - BigInt(1)) * input) / BigInt(6);
console.log(`${result}`);
console.log(3);
