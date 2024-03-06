function getGCD(a, b) {
    return a % b === 0 ? b : getGCD(b, a % b)
}

function solution(denom1, num1, denom2, num2) {
    let denom = denom1 * num2 + denom2 * num1;
    let num = num1 * num2;
    let gcd = getGCD(denom, num);

    return [denom / gcd, num / gcd]
}

console.log(solution(1, 2, 3, 4));
console.log(solution(9, 2, 1, 3));