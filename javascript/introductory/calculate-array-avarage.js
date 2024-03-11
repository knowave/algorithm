function solution(numbers) {
    let totalAmount = 0;
    for (let i = 0; i < numbers.length; i++) {
        totalAmount += numbers[i];
    }

    return totalAmount / numbers.length;
}