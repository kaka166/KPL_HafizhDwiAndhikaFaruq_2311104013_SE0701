const MatematikaLibraries = {
  FPB: function (a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return Math.abs(a);
  },

  KPK: function (a, b) {
    return Math.abs(a * b) / this.FPB(a, b);
  },

  Turunan: function (koefisien) {
    let result = [];
    let degree = koefisien.length - 1;

    for (let i = 0; i < koefisien.length - 1; i++) {
      let coef = koefisien[i] * (degree - i);
      if (coef === 0) continue;

      let pangkat = degree - i - 1;
      let term = coef.toString();
      if (pangkat > 0) {
        term += "x";
        if (pangkat > 1) term += pangkat.toString();
      }

      result.push(term);
    }

    return result.join(" + ").replace(/\+\s\-/g, "- ");
  },

  Integral: function (koefisien) {
    let result = [];
    let degree = koefisien.length - 1;

    for (let i = 0; i < koefisien.length; i++) {
      let newPangkat = degree - i + 1;
      let pembilang = koefisien[i];
      let penyebut = newPangkat;

      if (pembilang % penyebut === 0) {
        let coef = pembilang / penyebut;
        let term = coef.toString() + "x";
        if (newPangkat > 1) term += newPangkat.toString();
        result.push(term);
      } else {
        let term = `(${pembilang}/${penyebut})x`;
        if (newPangkat > 1) term += newPangkat.toString();
        result.push(term);
      }
    }

    result.push("C");
    return result.join(" + ").replace(/\+\s\-/g, "- ");
  },
};

module.exports = MatematikaLibraries;
