const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let n = -1;
rl.on('line', (line) => {
  if (n === -1) {
    n = parseInt(line.trim(), 10);
  } else {
    let arr = line.split(' ');
    arr = arr.map(val => parseInt(val, 10));

    const sum = arr.reduce((preSum, val) => preSum + val, 0);
    console.log(sum);
  }
});
