// █▀▀ █▀█ █▀▀ ▄▀█ ▀█▀ █▀▀ █▀▄   █▄▄ █▄█   █░█ ▄▀█ █▀ ▄▀█ █▄░█   █▄▄ ▄▀█ █▄█ █▀▀ █░█ █░░
// █▄▄ █▀▄ ██▄ █▀█ ░█░ ██▄ █▄▀   █▄█ ░█░   █▀█ █▀█ ▄█ █▀█ █░▀█   █▄█ █▀█ ░█░ █▄█ █▄█ █▄▄

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function lonelyinteger(a) {
    let lonely = 0;
    for (let i = 0; i < a.length; i++) {
        lonely ^= a[i];
    }
    return lonely;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const n = parseInt(readLine().trim(), 10);
    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));
    const result = lonelyinteger(a);
    ws.write(result + '\n');
    ws.end();
}
