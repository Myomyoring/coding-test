function solution(age) {
    var answer = '';
    age = age + '';
    for(let i of age){
        answer += String.fromCharCode(Number(i)+97)
    }

    return answer;
}

/*
1. for..in 문, for..of 문 알아두기
2. 자료형 변환 함수 숙지
2-1. Number() - 문자열 숫자를 "1" -> 숫자 변환
2-2. String() or 숫자+'' -> 문자열 변환
3. String.fromCharCode(숫자) -> 아스키코드 문자로 변환
 */