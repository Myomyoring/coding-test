function solution(price, money, count) {
	let use = 0;
	for (let i = 1; i <= count; i++) {
		use += price * i;
	}
	return use > money ? use - money : 0;
}
