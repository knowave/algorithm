function solution(my_string, letter) {
    return my_string.split('').filter((string) => string !== letter).join('');
}