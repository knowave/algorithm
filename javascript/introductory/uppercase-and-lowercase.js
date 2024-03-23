// 문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.
// 예를 들어, my_string이 'StuDY'인 경우 'sTUdy'를 return하면 됩니다.

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

console.log(solution('cccCCC'));