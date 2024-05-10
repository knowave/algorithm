function solution(number, n, m) {
    const isCommonMultiple = number % n === 0 && number % m === 0;
    return isCommonMultiple ? 1 : 0
}