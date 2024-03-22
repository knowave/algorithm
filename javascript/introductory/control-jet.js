function solution(s) {
    let answer = 0;
    let temp = 0;
    let arr = s.split(' ');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'Z') {
            answer -= temp;
            temp = 0;
        } else {
            temp = parseInt(arr[i]);
            answer += temp;
        }
    }
    return answer;
}