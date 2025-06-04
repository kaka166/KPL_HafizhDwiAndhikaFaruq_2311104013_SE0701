const { CariTandaBilangan } = require("./logika.js");

describe("CariTandaBilangan", () => {
  test('mengembalikan "Negatif" untuk input negatif', () => {
    expect(CariTandaBilangan(-5)).toBe("Negatif");
  });

  test('mengembalikan "Positif" untuk input positif', () => {
    expect(CariTandaBilangan(10)).toBe("Positif");
  });

  test('mengembalikan "Nol" untuk input 0', () => {
    expect(CariTandaBilangan(0)).toBe("Nol");
  });
});
