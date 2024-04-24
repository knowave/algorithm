function solution(i, j, k) {
    let count = 0;
    for (let num = i; num <= j; num++) {
        count += num.toString().split('').filter((char) => char === k.toString()).length;
    }
    return count;
}