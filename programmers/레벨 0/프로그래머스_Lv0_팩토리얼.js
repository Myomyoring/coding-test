function solution(n) {
    var answer = 0;
    var total = 1;

    for(let i=1; i<=n; i++){
        total *= i;
        if(total === n){
            answer = i;
            break;
        }else if(total < n && total * (i+1) > n){
            answer = i;
            break;
        }
    }

    return answer;
}