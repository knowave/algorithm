function solution(array) {
    const map = new Map();
    let max = 0;
    let result = -1;

    for (const num of array) {
        const count = (map.get(num) || 0) + 1;
        map.set(num, count);
        if (count > max) {
            max = count;
            result = num;
        } else if (count === max) {
            result = -1;
        }
    }

    return result;
}