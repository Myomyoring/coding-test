function solution(n) {
    var answer = 0;
    var cnt = 0;

    for(let i=0; i <= n; i++){
        cnt = 0;
        for(let j=1; j <= i; j++){
            if(i%j === 0){
                cnt ++;
            }
        }
        cnt >= 3 ? answer++ : "";
    }
    return answer;
}