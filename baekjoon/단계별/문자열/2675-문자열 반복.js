const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let answer = '';
for (let i = 1; i <= input[0]; i++) {
 let test = input[i].split(' ');
 for (let j = 0; j < test[1].length; j++) {
  answer += test[1][j].repeat(Number(test[0]));
 }
 answer += `\n`;
}

console.log(answer);
