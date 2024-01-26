import {
  points,
  matchedNumbers,
  totalPoints,
  totalScratchcards,
} from "../src/day4";

describe("day 4 exercise 1", () => {
  it("return matching cards for a scratchcard", () => {
    const line = "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53";

    const card = matchedNumbers(line);
    expect(card.length).toBe(4);
    expect(card).toContain(48);
    expect(card).toContain(83);
    expect(card).toContain(86);
    expect(card).toContain(17);
  });
  it("points for a scratchcard", () => {
    const card1 = "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53";
    expect(points(card1)).toBe(8);

    const card2 = "Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19";
    expect(points(card2)).toBe(2);

    const card4 = "Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83";
    expect(points(card4)).toBe(1);

    const card6 = "Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11";
    expect(points(card6)).toBe(0);
  });

  it("total points for a set of scratchards", () => {
    const lines = [
      "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53",
      "Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19",
      "Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1",
      "Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83",
      "Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36",
      "Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11",
    ];

    expect(totalPoints(lines)).toBe(13);
  });

  it("total calculates total number of scratchards - 2nd exercise", () => {
    const lines = [
      "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53",
      "Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19",
      "Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1",
      "Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83",
      "Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36",
      "Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11",
    ];

    expect(totalScratchcards(lines)).toBe(30);
  });
});
