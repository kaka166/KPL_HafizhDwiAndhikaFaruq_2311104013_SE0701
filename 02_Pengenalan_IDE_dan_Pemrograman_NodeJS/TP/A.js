const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan satu huruf: ", function (input) {
  const huruf = input.charAt(0).toUpperCase();

  if (huruf === "A" || huruf === "I" || huruf === "U" || huruf === "E" || huruf === "O") {
    console.log("Huruf " + huruf + " merupakan huruf vokal");
  } else {
    console.log("Huruf " + huruf + " merupakan huruf konsonan");
  }

  rl.close();
});
