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

function diagonalDifference(arr) {
    let leftDiagonal = 0;
    let rightDiagonal = 0;
    let n = arr.length;
    //run a loop from 0 till n, the number of rows in the matrix and compare number of columns and rows in the matrix to be equal.
    for (let i = 0; i < n; i++) {
        leftDiagonal += arr[i][i];
        rightDiagonal += arr[i][n - i - 1];
    }
    //Let's return the absolute value of the difference between left diagonal and right diagonal values for the matrix. We take the absolute value to make sure we have a postive number.
    return Math.abs(leftDiagonal - rightDiagonal);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const n = parseInt(readLine().trim(), 10);
    let arr = Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    const result = diagonalDifference(arr);
    ws.write(result + '\n');
    ws.end();
}
