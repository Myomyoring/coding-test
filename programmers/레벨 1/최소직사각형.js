// function solution(sizes) {
//     const max = Math.max(...sizes.flat());
//     const standard = sizes.find((el) => el[0] === max || el[1] === max);
//     let min = standard.find((num) => num !== max);
//     for(let i=0; i<sizes.length; i++){
//         let tmp = Math.min(sizes[i][0], sizes[i][1]);
//         if(tmp > min) min = tmp;
//     }
//     return min * max;
// }

function solution(sizes) {
	const garo = [];
	const sero = [];
	for (let i = 0; i < sizes.length; i++) {
		sizes[i].sort((a, b) => b - a);
		garo.push(sizes[i][0]);
		sero.push(sizes[i][1]);
	}
	return Math.max(...garo) * Math.max(...sero);
}
