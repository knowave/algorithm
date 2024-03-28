function solution(quiz) {
    const answer = [];

    for (const q of quiz) {
        const [x, operator, y, z, re] = q.split(' ').map(s => s.trim());

        const result = operator === '+' ? Number(x) + Number(y) : Number(x) - Number(y);

        answer.push(result === Number(re) ? 'O' : 'X');
    }

    return answer;
}