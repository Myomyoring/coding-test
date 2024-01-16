// 기울기 구하는 공식 : (y2 - y1) / (x2 - x1)
{
	/* <a href="https://ko.wikihow.com/%EC%A7%81%EC%84%A0%EC%9D%98-%EA%B8%B0%EC%9A%B8%EA%B8%B0-%EA%B5%AC%ED%95%98%EB%8A%94-%EB%B2%95" target="_blank">참고 글</a> */
}

function solution(dots) {
	const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;

	if ((y1 - y2) / (x1 - x2) === (y3 - y4) / (x3 - x4)) return 1;
	if ((y1 - y3) / (x1 - x3) === (y2 - y4) / (x2 - x4)) return 1;
	if ((y1 - y4) / (x1 - x4) === (y2 - y3) / (x2 - x3)) return 1;

	return 0;
}
