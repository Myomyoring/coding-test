function solution(num_list) {
    var answer = [];
    let double = 0;
    let single = 0;

    for(let i=0; i < num_list.length; i++){

        if(num_list[i] % 2 === 0){
            double ++;
        }else {
            single ++;
        }
    }
    answer.push(double);
    answer.push(single);

    return answer;
}