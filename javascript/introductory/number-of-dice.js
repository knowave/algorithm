function solution(box, n) {
    let [a, b, c] = box;

    return Math.floor(a / n) * Math.floor(b / n) * Math.floor(c / n);
}

console.log(solution([10, 8, 6], 3));