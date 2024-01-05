const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let star = '*';

rl.on('line', function (line) {
    input = line;
}).on('close', function () {

    let star = '*';

    for(let i=0; i<input; i++){
        console.log(star);
        star += '*';

    }
});