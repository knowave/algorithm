function solution(age) {
    let result = '';
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    age = age.toString();

    for (let i = 0; i < age.length; i++) {
        result += alphabet[age[i]];
    }

    return result;
}