function solution(my_string) {
    var answer = '';

    for(let i=0; i<my_string.length; i++){
        let num = my_string.charCodeAt(i);

        if(num < 97){
            answer += String.fromCharCode(num+32)
        }else answer += String.fromCharCode(num-32)
    }

    return answer;
}