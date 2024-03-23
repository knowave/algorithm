function solution(order) {
    let answer = 0;
    let numbers = order.toString().split('').map(Number);

    for (const number of numbers) {
        if (number === 3 || number === 6 || number === 9) answer++;
    }
    return answer;
}