import { validParts, sumValidParts, sumRatioGears } from "../src/day3";

describe("day 3 exercise 1", () => {
  it("if a number is adjacent to a symbol", () => {
    const scheme = [
      "467..114..",
      "...*......",
      "..35..633.",
      "......#...",
      "617*......",
      ".....+..58",
      "..592.....",
      "......755.",
      "...$.*....",
      ".664.598..",
    ];

    const parts = validParts(scheme).map((n) => n.num);
    expect(parts).toContain(467);
    expect(parts).toContain(35);
    expect(parts).toContain(617);
    expect(parts).toContain(592);
    expect(parts).toContain(755);
    expect(parts).toContain(664);
    expect(parts).toContain(598);

    expect(parts).not.toContain(114);
    expect(parts).not.toContain(58);
  });

  it("will sum the valid parts", () => {
    const scheme = [
      "467..114..",
      "...*......",
      "..35..633.",
      "......#...",
      "617*......",
      ".....+..58",
      "..592.....",
      "......755.",
      "...$.*....",
      ".664.598..",
    ];

    expect(sumValidParts(scheme)).toBe(4361);
  });

  it("will sum the ratio gears", () => {
    const scheme = [
      "467..114..",
      "...*......",
      "..35..633.",
      "......#...",
      "617*......",
      ".....+..58",
      "..592.....",
      "......755.",
      "...$.*....",
      ".664.598..",
    ];

    expect(sumRatioGears(scheme)).toBe(467835);
  });
});
