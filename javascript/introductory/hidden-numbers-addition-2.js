function solution(my_string) {
    let sum = 0;
    let number = '';
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] >= '0' && my_string[i] <= '9') {
            number += my_string[i];
        } else {
            if (number !== '') {
                sum += parseInt(number);
                number = '';
            }
        }
    }
    if (number !== '') {
        sum += parseInt(number);
    }
    return sum;
}