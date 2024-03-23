function solution(my_string) {
    let answer = '';
    
    for (const char of my_string) {
        answer += char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    }

    return answer;
}

console.log(solution('cccCCC'));