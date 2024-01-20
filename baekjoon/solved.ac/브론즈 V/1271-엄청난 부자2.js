const [money, person] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(BigInt);
console.log(`${money / person}\n${money % person}`);
