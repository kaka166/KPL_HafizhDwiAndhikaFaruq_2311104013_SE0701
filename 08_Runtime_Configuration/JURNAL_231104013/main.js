const readline = require("readline");
const BankTransferConfig = require("./BankTransferConfig");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const configObj = new BankTransferConfig();
const config = configObj.getConfig();

const lang = config.lang;
const promptText = lang === "id"
  ? "Masukkan jumlah uang yang akan di-transfer: "
  : "Please insert the amount of money to transfer: ";

rl.question(promptText, (amountInput) => {
  const amount = parseInt(amountInput);
  const threshold = parseInt(config.transfer.threshold);
  const lowFee = parseInt(config.transfer.low_fee);
  const highFee = parseInt(config.transfer.high_fee);
  const fee = amount <= threshold ? lowFee : highFee;
  const total = amount + fee;

  if (lang === "id") {
    console.log(`Biaya transfer = ${fee}`);
    console.log(`Total biaya = ${total}`);
  } else {
    console.log(`Transfer fee = ${fee}`);
    console.log(`Total amount = ${total}`);
  }

  const methodPrompt = lang === "id" ? "Pilih metode transfer:" : "Select transfer method:";
  console.log(methodPrompt);
  config.methods.forEach((method, index) => {
    console.log(`${index + 1}. ${method}`);
  });

  rl.question("> ", (methodChoice) => {
    const confirmationKey = lang === "id"
      ? config.confirmation.id
      : config.confirmation.en;
    const confirmPrompt = lang === "id"
      ? `Ketik "${confirmationKey}" untuk mengkonfirmasi transaksi: `
      : `Please type "${confirmationKey}" to confirm the transaction: `;

    rl.question(confirmPrompt, (confirmInput) => {
      if (confirmInput.toLowerCase() === confirmationKey.toLowerCase()) {
        console.log(lang === "id" ? "Proses transfer berhasil" : "The transfer is completed");
      } else {
        console.log(lang === "id" ? "Transfer dibatalkan" : "Transfer is cancelled");
      }
      rl.close();
    });
  });
});
