const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan angka (1 - 10000): ", function (input) {
  const angka = parseInt(input);

  let prima = true;

  if (angka <= 1) {
    prima = false;
  } else {
    for (let i = 2; i <= Math.sqrt(angka); i++) {
      if (angka % i === 0) {
        prima = false;
        break;
      }
    }
  }

  if (prima) {
    console.log("Angka " + angka + " merupakan bilangan prima");
  } else {
    console.log("Angka " + angka + " bukan merupakan bilangan prima");
  }

  rl.close();
});
