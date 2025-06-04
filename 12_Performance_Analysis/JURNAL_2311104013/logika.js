function CariNilaiPangkat(a, b) {
  if (b === 0) return 1;
  if (b < 0) return -1;
  if (b > 10) return -2;

  let hasil = 1;
  for (let i = 0; i < b; i++) {
    hasil *= a;
    if (hasil > Number.MAX_SAFE_INTEGER) return -3;
  }

  if (a > 100) return -2;

  return hasil;
}

module.exports = { CariNilaiPangkat };
