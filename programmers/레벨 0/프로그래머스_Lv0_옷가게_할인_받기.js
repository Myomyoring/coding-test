function solution(price) {
    var answer = 0;

    if(price >= 100000 && price < 300000){
        answer = Math.floor(price - (price/20))
    }else if(price >= 300000 && price < 500000){
        answer = Math.floor(price - (price/10))
    }else if(price >= 500000){
        answer = Math.floor(price - (price/5))
    }else answer = price;

    return answer;
}