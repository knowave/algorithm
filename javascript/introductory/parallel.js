function isParallel(dot1, dot2, dot3, dot4) {
    const slope1 = (dot2[1] - dot1[1]) / (dot2[0] - dot1[0]);
    const slope2 = (dot4[1] - dot3[1]) / (dot4[0] - dot3[0]);

    return slope1 === slope2;
}

function solution(dots) {
    // 가능한 직선 조합 생성
    const lines = [];
    for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
            lines.push([dots[i], dots[j]]);
        }
    }

    // 평행한 직선이 있는지 확인
    for (let i = 0; i < lines.length; i++) {
        for (let j = i + 1; j < lines.length; j++) {
            const line1 = lines[i];
            const line2 = lines[j];
            if (isParallel(line1[0], line1[1], line2[0], line2[1])) {
                return 1;
            }
        }
    }

    return 0;
}

// 테스트 케이스
console.log(solution([[1, 4], [9, 2], [3, 8], [11, 6]])); // 1
console.log(solution([[3, 5], [4, 1], [2, 4], [5, 10]])); // 0
