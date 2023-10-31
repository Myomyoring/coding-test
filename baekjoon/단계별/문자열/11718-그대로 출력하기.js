const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
for (let str of input) {
 console.log(`${str}`);
}
