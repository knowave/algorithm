function solution(s) {
    const arr = s.split('');
    const obj = {};
    const answer = [];

    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++;
        } else {
            obj[arr[i]] = 1;
        }
    }

    for (let key in obj) {
        if (obj[key] === 1) {
            answer.push(key);
        }
    }

    return answer.sort().join('');
}