function solution(num_list) {
    const length = num_list.length;
    const last_element = num_list[length - 1];
    const second_last_element = num_list[length - 2];

    if (last_element > second_last_element) {
        num_list.push(last_element - second_last_element);
    } else {
        num_list.push(last_element * 2);
    }

    return num_list;
}