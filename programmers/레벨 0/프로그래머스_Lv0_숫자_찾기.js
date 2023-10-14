function solution(num, k) {
    var answer = num+'';

    if(answer.indexOf(k) === -1){
        answer = -1;
    }else {
        answer = answer.indexOf(k)+1;
    }

    return answer;
}