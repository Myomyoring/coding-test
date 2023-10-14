function solution(emergency) {
    var answer = [...emergency].sort((a,b) => b-a);
    return emergency.map(i => answer.indexOf(i)+1);
}