const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
const arr = Array.from({ length: n }, (_, i) => i + 1);
console.log(arr.join('\n'));
