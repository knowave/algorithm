function solution(a, b, c , d) {
    const dice = [a, b, c , d];
    const counts = {};

    for (const num of dice) {
        counts[num] = (counts[num] || 0) + 1;
    }

    const uniqueNumbers = Object.keys(counts).map(Number);
    const countValues = Object.values(counts);

    if (countValues.includes(4)) {
        return 1111 * uniqueNumbers[0];
    }

    if (countValues.includes(3)) {
        const p = uniqueNumbers[countValues.indexOf(3)];
        const q = uniqueNumbers[countValues.indexOf(1)];
        return (10 * p + q) ** 2;
    }

    if (countValues.includes(2) && countValues.filter(x => x === 2).length === 2) {
        const p = uniqueNumbers[countValues.indexOf(2)];
        const q = uniqueNumbers[countValues.lastIndexOf(2)];
        return (p + q) * Math.abs(p - q);
    }

    if (countValues.includes(2)) {
        const p = uniqueNumbers[countValues.indexOf(2)];
        const q = uniqueNumbers[countValues.indexOf(1)];
        const r = uniqueNumbers[countValues.lastIndexOf(1)];
        return q * r;
    }

  return Math.min(...uniqueNumbers);
}

console.log(solution(1, 2, 3, 4)); // 1
console.log(solution(1, 1, 1, 1)); // 4444
console.log(solution(2, 2, 3, 3)); // 4
console.log(solution(1, 2, 2, 3)); // 6
console.log(solution(1, 1, 1, 2)); // 100