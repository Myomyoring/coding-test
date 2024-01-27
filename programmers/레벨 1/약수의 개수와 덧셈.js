// 제곱근이 정수면 약수의 개수가 홀수, 실수면 짝수
function solution(left, right) {
	let answer = 0;
	for (let num = left; num <= right; num++) {
		let cnt = 0;
		for (let i = 1; i <= num; i++) {
			num % i === 0 && cnt++;
		}
		answer += cnt % 2 === 0 ? +num : -num;
	}
	return answer;
}
