function solution(n) {
    var answer = [];
    var tempArr = [];

    var half = n/2;
    tempArr.push(1,n);

    for(let i=2; i <= half; i++){
        if(n%i === 0){
            tempArr.push(i, n/i);
        }
    }
    answer = tempArr.filter((item, idx) =>
        tempArr.indexOf(item) === idx)
    answer.sort(function(a,b) {return a-b})

    return answer;
}

/*
1. 약수는 n이 아무리 커도 그 수의 절반을 넘지 않는다.
2. 1과 자기 자신을 먼저 넣고, n%2 === 0 나눠 떨어지는 숫자 전부 배열에 넣기
3. .indexOf(element) 메소드랑 배열 index를 매칭해서 중복되는 값 거르기
3-1. 단독 .indexOf(element) 정확하게 일치(===)하는'첫번째' element의 index를 리턴하기 때문에 중복된 element는 false로 처리 돼 제외되고 출력,
3-2. indexOf(element) === index 의 경우 중복값의 첫번 째 인덱스 하나만 포함되어 리턴
4. .sort() 메소드로 오름차순 정렬
*/