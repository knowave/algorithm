function solution(my_string) {
    const vowels = 'aeiou';
    return my_string.split('').filter((el) => !vowels.includes(el)).join('');
}