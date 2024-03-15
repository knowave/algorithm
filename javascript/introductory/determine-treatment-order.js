function solution(emergency) {
    let result = [];
    let temp = [];

    for (let i = 0; i < emergency.length; i++) {
        temp.push(emergency[i]);
    }

    temp.sort((a, b) => b - a);

    for (let i = 0; i < emergency.length; i++) {
        result.push(temp.indexOf(emergency[i]) + 1);
    }

    return result;
}