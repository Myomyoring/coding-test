function solution(s1, s2) {
    var answer = 0;

    s1.map(same1 => s2.filter(same2 => same1 === same2 && answer++))

    return answer;
}