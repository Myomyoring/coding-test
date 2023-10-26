const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const [n, m] = input[0].split(' ').map(Number);

const arr = Array.from({ length: n }, (_, i) => i + 1);

for (let i = 1; i <= m; i++) {
  let range = input[i].split(' ').map(Number);
  let reverseArr = arr.slice(range[0] - 1, range[1]).reverse();
  let k = 0;
  for (let j = range[0] - 1; j < range[1]; j++) {
    arr[j] = reverseArr[k];
    k++;
  }
}

console.log(arr.join(' '));
