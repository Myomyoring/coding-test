// function solution(s) {
//     const arr = s.split(' ');
//     let answer = '';
//     arr.forEach((str) => {
//         let tmp = '';
//         for(let i=0; i<str.length; i++){
//             if(i%2 === 0){
//                 tmp += str[i].toUpperCase()
//             } else tmp += str[i].toLowerCase();
//         }
//         answer += `${tmp} `;
//     })
//     return answer.trimEnd();
// }

// 공백 함정 문제 ... 문제가 파놓은 불친절를 풀이자가 예외를 읽어야 함
// * 각 단어는 >하나 이상의 공백문자<로 구분되어 있습니다.
// * 지문에 문자열의 시작이나 끝에는 공백 문자가 없다는 >언급은 없습니다.<
// * >입출력 예에서는 문자열의 시작이나 끝에 공백이 없지만,< 예제만 보고 전체 테스트 케이스를 넘겨짚으면 안 됩니다.
// 이렇게 하나씩 배우는 것

function solution(s) {
	let answer = '';
	let idx = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] === ' ') {
			if (s[i + 1] !== ' ') {
				idx = 0;
			}
			answer += ' ';
		} else {
			if (idx % 2 === 0) {
				answer += s[i].toUpperCase();
				idx++;
			} else {
				answer += s[i].toLowerCase();
				idx++;
			}
		}
	}
	return answer;
}
