function solution(array, height) {
    var answer = [];

    array.filter(ki => ki > height && answer.push(ki))

    return answer.length;
}