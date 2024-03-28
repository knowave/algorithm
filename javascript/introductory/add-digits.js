function solution(n) {
    let answer = 0;
    const arr = n.toString().split('').map(Number);

    for (const num of arr) {
        answer += num;
    }

    return answer;
}