function solution(chicken) {
    if (chicken === 0) return 0;
    return Math.floor(((chicken - 10) / 9) + 1)
}