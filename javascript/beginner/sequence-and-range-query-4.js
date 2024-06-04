function solution(arr, queries) {
    for (let i = 0; i < queries.length; i++) {
        const [start, end, k] = queries[i];

        for (let j = start; j <= end; j++) {
            if (j % k === 0) arr[j] += 1;
        }
    }

    return arr;
}