function solution(arr, queries) {
    for (let i = 0; i < queries.length; i++) {
        const [idx1, idx2] = queries[i];
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    return arr;
}