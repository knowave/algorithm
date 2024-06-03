function solution(log) {
    let answer = '';

    for (let i = 0; i < log.length; i++) {
        const n = log[i + 1] - log[i];

        switch (n) {
            case 1:
                answer += 'w';
                break;
            case -1:
                answer += 's';
                break;
            case 10:
                answer += 'd';
                break;
            case -10:
                answer += 'a';
                break;
        }
    }

    return answer;
}