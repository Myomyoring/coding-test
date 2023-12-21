// 비교 대상이 너무 많은 경우에는 시간 복잡도가 O(1)인 Set을 사용하는 것이 더 유리하다
// list - includes > O(n), set - has > O(1)
// Set은 수학적 집합을 구현하기 위한 자료구조이다. 따라서 Set을 통해 교집합, 합집합, 차집합, 여집합 등을 구현할 수 있다.

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const cards = new Set(input[1].split(' ').map(Number));
const myCards = input[3].split(' ').map(Number);
let result = [];
myCards.forEach((num) => {
	cards.has(num) ? result.push(1) : result.push(0);
});
console.log(result.join(' '));
