function solution(my_string) {
    let numbers = '0123456789';
    return my_string.split('').filter((el) => numbers.includes(el)).map(Number).reduce((acc, el) => acc + el, 0);
}