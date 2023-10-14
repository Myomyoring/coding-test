function solution(i, j, k) {
    var answer = 0;
    var str = "";
    var kk = k+"";

    for(let o=i; o<=j; o++){
        str += o+"";
    }

    str.split("").filter(num => num === kk && answer++)

    return answer;
}