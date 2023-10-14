function solution(my_string, num1, num2) {
    var answer = my_string.split('');

    let char1 = my_string[num1];
    let char2 = my_string[num2];

    answer.splice(num1, 1, char2)
    answer.splice(num2, 1, char1)

    return answer.join('');
}