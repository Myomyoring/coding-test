const input = BigInt(require('fs').readFileSync('/dev/stdin').toString().trim());
console.log(`${input * input * input}`);
console.log(3);
