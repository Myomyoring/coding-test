function solution(dots) {
	let garo = 0;
	let sero = 0;

	let x = dots.filter((d) => d[1] === dots[0][1]);
	let y = dots.filter((d) => d[0] === dots[0][0]);
	garo = Math.max(x[0][0], x[1][0]) - Math.min(x[0][0], x[1][0]);
	sero = Math.max(y[0][1], y[1][1]) - Math.min(y[0][1], y[1][1]);
	return garo * sero;
}
