function solution(n, numlist) {
    var answer = [];

    numlist.filter(bae => bae % n === 0 && answer.push(bae))

    return answer;
}