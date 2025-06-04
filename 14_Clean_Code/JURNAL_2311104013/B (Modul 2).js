// Loop dimulai dari 0 sampai 49
for (let indeks = 0; indeks < 50; indeks++) {
  let hasilOutput = indeks;

  if (indeks % 6 === 0) {
    hasilOutput += " #$#$"; //Jika angka merupakan kelipatan 6
  } else if (indeks % 2 === 0) {
    hasilOutput += " ##"; //Jika kelipatan 2 (tapi bukan 6)
  } else if (indeks % 3 === 0) {
    hasilOutput += " $$"; //Jika kelipatan 3 (tapi bukan 2 dan 6)
  }

  console.log(hasilOutput);
}
