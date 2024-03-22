function solution(strlist) {
    let answer = [];

    for (let i = 0; i < strlist.length; i++) {
        const strSplit = strlist[i].split('');
        answer.push(strSplit.length);
    }

    return answer;
}