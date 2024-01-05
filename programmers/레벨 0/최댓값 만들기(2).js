function solution(numbers) {
    var answer = 0;
    var arr = [];
    numbers.sort(function(a,b){return a-b})

    if(numbers[0] * numbers[1] > numbers[numbers.length-1] * numbers[numbers.length-2]){
        answer = numbers[0] * numbers[1]
    }else answer = numbers[numbers.length-1] * numbers[numbers.length-2]

    return answer;
}