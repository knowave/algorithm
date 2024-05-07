const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split('');
}).on('close', function () {
    input.forEach((el) => {
        console.log(el);
    });
});