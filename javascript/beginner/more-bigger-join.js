function solution(a, b) {
    let str1 = a.toString();
    let str2 = b.toString();
    let answer1 = str1 + str2;
    let answer2 = str2 + str1;

    return Number(answer1) > Number(answer2) ? Number(answer1) : Number(answer2);
}