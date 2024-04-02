function solution(keyinput, board) {
    const [width, height] = board;
    let x = 0;
    let y = 0;

    for (let i = 0; i < keyinput.length; i++) {
        switch (keyinput[i]) {
            case "up":
                y++;
                break;
            case "down":
                y--;
                break;
            case "left":
                x--;
                break;
            case "right":
                x++;
                break;
        }

        if (x > Math.floor(width / 2)) x = Math.floor(width / 2);
        if (x < -Math.floor(width / 2)) x = -Math.floor(width / 2);
        if (y > Math.floor(height / 2)) y = Math.floor(height / 2);
        if (y < -Math.floor(height / 2)) y = -Math.floor(height / 2);
    }

    return [x, y];
}