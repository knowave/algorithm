function solution(arr, queries) {
    const result = [];

    for (let i = 0; i < queries.length; i++) {
        const [start, end, k] = queries[i];
        let min = Infinity;
        let found = false;

        for (let j = start; j <= end; j++) {
            if (arr[j] > k && arr[j] < min) {
                min = arr[j];
                found = true;
            }
        }

        result.push(found ? min : -1);
    }

    return result;
}