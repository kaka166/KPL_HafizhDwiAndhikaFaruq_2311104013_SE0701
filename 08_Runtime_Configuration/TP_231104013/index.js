const readline = require('readline');
const CovidConfig = require('./CovidConfig');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const configInstance = new CovidConfig();
configInstance.ubahSatuan();
const config = configInstance.getConfig();

rl.question(`Berapa suhu badan anda saat ini? Dalam nilai ${config.satuan_suhu}: `, (suhuInput) => {
  const suhu = parseFloat(suhuInput);

  rl.question('Berapa hari yang lalu (perkiraan) anda terakhir memiliki gejala deman? ', (hariInput) => {
    const hari = parseInt(hariInput);
    let suhuValid = false;

    if (config.satuan_suhu === 'celcius') {
      suhuValid = suhu >= 36.5 && suhu <= 37.5;
    } else if (config.satuan_suhu === 'fahrenheit') {
      suhuValid = suhu >= 97.7 && suhu <= 99.5;
    }

    const hariValid = hari < config.batas_hari_deman;

    if (suhuValid && hariValid) {
      console.log(config.pesan_diterima);
    } else {
      console.log(config.pesan_ditolak);
    }

    rl.close();
  });
});
