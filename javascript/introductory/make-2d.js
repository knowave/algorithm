function solution(num_list, n) {
    let result = [];
    let temp = [];
    for (let i = 0; i < num_list.length; i++) {
        temp.push(num_list[i]);
        if (temp.length === n) {
            result.push(temp);
            temp = [];
        }
    }
    return result;
}