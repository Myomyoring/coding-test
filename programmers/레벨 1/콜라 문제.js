function solution(a, b, n) {
	let answer = 0;
	let empty = n;
	let use = n;
	let get = 0;
	while (empty >= a) {
		empty %= a;
		get = Math.trunc(use / a) * b;
		answer += get;
		empty += get;
		use = empty;
	}
	return answer;
}
