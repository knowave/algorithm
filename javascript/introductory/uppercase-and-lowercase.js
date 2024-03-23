function solution(my_string) {
    let answer = '';
    for (const char of my_string) {
        if (char === char.toUpperCase()) {
            answer += char.toLowerCase();
        } else {
            answer += char.toUpperCase();
        }
    }
    return answer;
}