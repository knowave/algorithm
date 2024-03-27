function solution(num, k) {
    return num.toString().split("").map(Number).indexOf(k) + 1 || -1
}

console.log(solution([123456], 7));