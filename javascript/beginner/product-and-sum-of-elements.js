function solution(num_list) {
    let a = 0;
    let b = 1;
    
    for (const num of num_list) {
        a += num;
        b *= num;
    }

    return a ** 2 > b ? 1 : 0;
}