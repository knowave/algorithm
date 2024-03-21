function solution(n) {
    let answer = 0;

    // 1, 2, 3은 합성수가 아니므로 4부터 시작
    for (let i = 4; i <= n; i++) {
        let divisors = 0;

        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                divisors++;
            }
        }

        if (divisors >= 3) {
            answer++;
        }
    }
    return answer;
}