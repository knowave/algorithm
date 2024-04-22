function solution(babbling) {
    let answer = 0;
    const regex = /^(aya|ye|woo|ma)+$/;

    babbling.map((word) => {
        if (regex.test(word)) return answer++;
    })

    return answer;
}