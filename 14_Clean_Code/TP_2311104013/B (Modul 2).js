// Import modul readline
const readline = require("readline");

// Inisialisasi interface untuk input/output (meskipun tidak digunakan secara langsung di sini)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Array bilangan genap
const daftarBilanganGenap = [2, 4, 6, 8, 10];

// Menampilkan isi array dengan indeks yang disesuaikan
for (let indeks = 0; indeks < daftarBilanganGenap.length; indeks++) {
  console.log(`Angka genap ${indeks + 1} : ${daftarBilanganGenap[indeks]}`);
}

// Menutup interface readline (walau tidak ada input di program ini)
rl.close();
