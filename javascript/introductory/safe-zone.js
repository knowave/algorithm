function solution(board) {
    const n = board.length;
    const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
    const dy = [-1, 0, 1, -1, 1, -1, 0, 1];
    const safeBoard = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) {
                for (let k = 0; k < 8; k++) {
                    const nx = i + dx[k];
                    const ny = j + dy[k];
                    if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
                        safeBoard[nx][ny] = 1;
                    }
                }
                safeBoard[i][j] = 1;
            }
        }
    }

    let safeCount = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (safeBoard[i][j] === 0) {
                safeCount++;
            }
        }
    }

    return safeCount;
}