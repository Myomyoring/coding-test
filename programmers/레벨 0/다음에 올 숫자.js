function solution(common) {
	let gap1 = common[1] - common[0];
	let gap2 = common[2] - common[1];
	if (gap1 === gap2) {
		return common[common.length - 1] + gap1;
	} else {
		return common[common.length - 1] * (common[1] / common[0]);
	}
}
