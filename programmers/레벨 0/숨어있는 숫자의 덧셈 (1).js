function solution(my_string) {
    var answer1 = '';
    var answer2 = 0;

    for(let i=0; i<my_string.length; i++){
        if(my_string[i] === '1' || my_string[i] === '2' || my_string[i] === '3' || my_string[i] === '4' || my_string[i] === '5' || my_string[i] === '6' || my_string[i] === '7' || my_string[i] === '8' || my_string[i] === '9'){
            answer1 += my_string[i];
        }
    }
    for(let j=0; j<answer1.length; j++){
        answer2 = answer2 + parseInt(answer1[j]);
    }

    return answer2;
}