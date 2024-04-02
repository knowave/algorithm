function solution(polynomial) {
    let xCount = 0;
    let constantCount = 0;

    const terms = polynomial.split(' + ');

    for (let term of terms) {
        if (term === 'x') {
            xCount++;
        } else if (term.includes('x')) {
            xCount += parseInt(term);
        } else {
            constantCount += parseInt(term);
        }
    }

    let result = '';

    if (xCount > 1) {
        result += `${xCount}x`;
    } else if (xCount === 1) {
        result += 'x';
    }

    if (constantCount > 0) {
        if (result.length > 0) {
            result += ' + ';
        }
        result += constantCount;
    }

    return result;
}