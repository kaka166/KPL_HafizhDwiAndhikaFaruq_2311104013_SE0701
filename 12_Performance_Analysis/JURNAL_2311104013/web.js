import { CariNilaiPangkat } from "./logika.js";

window.hitung = function () {
  const a = parseInt(document.getElementById("inputA").value, 10);
  const b = parseInt(document.getElementById("inputB").value, 10);
  const hasil = CariNilaiPangkat(a, b);
  document.getElementById("hasilLabel").innerText = "Hasil: " + hasil;
};
