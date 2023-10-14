function solution(num_list, n) {
    var answer = [];

    for(let i=0; i < num_list.length; i+=n){
        var subarr = [];

        for(let j=0; j < n; j++){
            if( i + j < num_list.length){
                subarr.push(num_list[i + j]);
            }
        }
        answer.push(subarr);
    }
    return answer;
}