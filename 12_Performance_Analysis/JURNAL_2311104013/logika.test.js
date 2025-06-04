const { CariNilaiPangkat } = require("./logika.js");

test("b = 0 should return 1", () => {
  expect(CariNilaiPangkat(0, 0)).toBe(1);
});

test("b < 0 should return -1", () => {
  expect(CariNilaiPangkat(5, -3)).toBe(-1);
});

test("b > 10 should return -2", () => {
  expect(CariNilaiPangkat(2, 11)).toBe(-2);
});

test("a > 100 should return -2", () => {
  expect(CariNilaiPangkat(101, 2)).toBe(-2);
});

test("result exceeds MAX_SAFE_INTEGER should return -3", () => {
  expect(CariNilaiPangkat(9999999, 10)).toBe(-3);
});

test("normal case 2^3 = 8", () => {
  expect(CariNilaiPangkat(2, 3)).toBe(8);
});
