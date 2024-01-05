function solution(balls, share) {
	let n = BigInt(1);
	let m = BigInt(1);
	let num = BigInt(1);
	for (let i = 1; i <= balls; i++) {
		n = n * BigInt(i);
	}
	for (let i = 1; i <= share; i++) {
		m = m * BigInt(i);
	}
	for (let i = 1; i <= balls - share; i++) {
		num = num * BigInt(i);
	}

	return n / (num * m);
}
