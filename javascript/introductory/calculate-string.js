function solution(my_string) {
    let result = 0;
    let operator = '+';
    let number = '';
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] === '+' || my_string[i] === '-') {
            result = operator === '+' ? result + parseInt(number) : result - parseInt(number);
            operator = my_string[i];
            number = '';
        } else {
            number += my_string[i];
        }
    }
    result = operator === '+' ? result + parseInt(number) : result - parseInt(number);
    return result;
}