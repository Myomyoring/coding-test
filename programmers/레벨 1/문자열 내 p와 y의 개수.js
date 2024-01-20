function solution(s) {
	const p = [...s].filter((e) => e === 'p' || e === 'P');
	const y = [...s].filter((e) => e === 'y' || e === 'Y');
	return p.length === y.length;
}
