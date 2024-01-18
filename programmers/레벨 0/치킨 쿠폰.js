function solution(chicken) {
	function service(num) {
		return Math.trunc(num / 10);
	}
	let coupon = chicken;
	let total = 0;
	let dak = 0;
	while (coupon > 9) {
		dak = service(coupon);
		total += dak;
		coupon -= dak * 10;
		coupon += dak;
	}

	return total;
}
