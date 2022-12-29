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

function countingSort(arr) {
    let count = new Array(100).fill(0);
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }
    let result = [];
    for (let i = 0; i < count.length; i++) {
        for (let j = 0; j < count[i]; j++) {
            result.push(i);
        }
    }
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const n = parseInt(readLine().trim(), 10);
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    const result = countingSort(arr);
    ws.write(result.join(' ') + '\n');
    ws.end();
}
