const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const bilanganGenap = [2, 4, 6, 8, 10];

for (let i = 0; i < bilanganGenap.length; i++) {
  console.log("Angka genap " + (i + 1) + " : " + bilanganGenap[i]);
}

rl.close();
