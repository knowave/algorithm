// 대소문자 바꿔서 출력하기
// 입럭: javascript/print-change-string.js
function printChangeString(str) {
    str = str.split('');
    str = str.map((s) => {
        if (s === s.toUpperCase()) {
            return s.toLowerCase();
        } else {
            return s.toUpperCase();
        }
    });
    return str.join('');
}
