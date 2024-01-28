// 반례: "0x16" === 22 // 진수 접두사는 변환 함수가 원치 않은 결과를 만들 수 있음
function solution(s) {
	let answer = true;
	s.split('').forEach((el) => {
		if (Number.isNaN(+el)) answer = false;
	});
	return (answer && s.length === 4) || (answer && s.length === 6);
}
