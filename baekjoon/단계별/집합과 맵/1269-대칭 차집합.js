const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
const aArr = input.shift().split(' ').map(Number);
const bArr = input.shift().split(' ').map(Number);
const aSet = new Set(aArr);
const bSet = new Set(bArr);

let aCnt = 0;
let bCnt = 0;

for (let i of aSet) {
	if (!bSet.has(i)) {
		aCnt++;
	}
}
for (let i of bSet) {
	if (!aSet.has(i)) {
		bCnt++;
	}
}

console.log(aCnt + bCnt);
