function solution(scores) {
    let ranking = [];
    let averageScores = [];

    for (const score of scores) {
        let average = score.reduce((acc, cur) => acc + cur) / score.length;
        averageScores.push(average);
    }

    for (let i = 0; i < averageScores.length; i++) {
        let rank = 1;
        for (let j = 0; j < averageScores.length; j++) {
            if (averageScores[i] < averageScores[j]) {
                rank++;
            }
        }
        ranking.push(rank);
    }

    return ranking;
}