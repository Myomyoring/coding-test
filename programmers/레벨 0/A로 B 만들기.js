function solution(before, after) {
    var answer = 0;

    var b = before.split('').sort().join('');
    var a = after.split('').sort().join('');

    b === a ? answer = 1 : answer = 0

    return answer;
}