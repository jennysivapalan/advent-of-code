import { differentWays, multipleOfRaces } from "../src/day6";
describe("day 6 exercise 1", () => {
  it("return number of different ways to win a race", () => {
    const time = 7;
    const distance = 9;

    expect(differentWays(7, 9)).toBe(4);

    expect(differentWays(15, 40)).toBe(8);
    expect(differentWays(30, 200)).toBe(9);
    expect(differentWays(71530, 940200)).toBe(71503);

    expect(differentWays(59688274, 543102016641022)).toBe(37286485);
  });

  it("return number of different ways to win a race in 3 races", () => {
    const races = [
      { time: 7, distance: 9 },
      { time: 15, distance: 40 },
      { time: 30, distance: 200 },
    ];
    expect(multipleOfRaces(races)).toBe(288);
  });

  it("return number of different ways to win a race in 3 races", () => {
    const races = [
      { time: 59, distance: 543 },
      { time: 68, distance: 1020 },
      { time: 82, distance: 1664 },
      { time: 74, distance: 1022 },
    ];
    expect(multipleOfRaces(races)).toBe(275724);
  });
});
