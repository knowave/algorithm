function solution(a, b) {
    let str1 = a.toString();
    let str2 = b.toString();
    let answer1 = str1 + str2;
    let answer2 = 2 * Number(str1) * Number(str2);

    return Number(answer1) > Number(answer2) ? Number(answer1) : Number(answer2);
}