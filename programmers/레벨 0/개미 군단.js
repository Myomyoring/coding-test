function solution(hp) {
    var answer = Math.floor(hp/5);
    answer += Math.floor(hp%5/3);
    answer += hp%5%3;

    return answer;
}