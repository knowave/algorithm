function solution(id_pw, db) {
    let answer = '';

    for (const user of db) {
        if (user[0] === id_pw[0] && user[1] === id_pw[1]) {
            answer = 'login';
        } else if (user[0] === id_pw[0] && user[1] !== id_pw[1]) {
            answer = 'wrong pw';
        } else if (user[0] !== id_pw[0] && user[1] !== id_pw[1]) {
            answer = 'fail';
        }
    }

    return answer;
}