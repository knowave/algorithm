function solution(hp) {
    let result = 0;
    let a = Math.floor(hp / 5);
    let b = Math.floor((hp % 5) / 3);
    let c = (hp % 5) % 3;
    result = a + b + c;
    return result;
}