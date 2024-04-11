function solution(sides) {
    const [a, b] = sides.sort((a, b) => a - b);

    const min = Math.abs(a - b) + 1;
    const max = a + b - 1;
    console.log(max);

    return max - min + 1;
}