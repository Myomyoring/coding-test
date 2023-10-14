function solution(array, n) {
    var answer = 0;
    var arr = array
    arr.push(n);
    arr.sort((a,b) => a-b);

    for(let i=0; i<arr.length; i++){
        if(arr[i] === n){
            if(!arr[i-1]){
                answer = arr[i+1]
                break;
            }else if(!arr[i+1]){
                answer = arr[i-1]
                break;
            }
            let pr = arr[i] - arr[i-1];
            let nx = arr[i+1] - arr[i];
            answer = Math.min(pr, nx) === pr ?
                arr[i-1] : arr[i+1]
        }
    }
    return answer;
}