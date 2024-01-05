function solution(my_string) {
    var answer = [];

    for(let i=0; i<10; i++){
        var str = i+"";
        for(let j=0; j<=my_string.length; j++)
            my_string[j] === str && answer.push(Number(my_string[j]))
    }

    answer.sort(function(a,b){return a-b})
    return answer;
}