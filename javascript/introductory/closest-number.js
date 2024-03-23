function solution(array, n) {
    let answer = array[0];
    for (let i = 1; i < array.length; i++) {
        if (Math.abs(array[i] - n) < Math.abs(answer - n)) {
            answer = array[i];
        } else if (Math.abs(array[i] - n) === Math.abs(answer - n)) {
            answer = Math.min(answer, array[i]);
        }
    }
    return answer;
}