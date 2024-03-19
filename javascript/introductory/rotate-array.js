function solution(numbers, direction) {
    let answer = [];

    for (let i = 0; i < numbers.length; i++) {
        if (direction === "left") {
            answer.push(numbers[(i + 1) % numbers.length]);
        } else if (direction === "right") {
            answer.push(numbers[(i + numbers.length - 1) % numbers.length]);
        }
    }

    return answer;
}