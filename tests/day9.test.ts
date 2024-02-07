import { nextNumber, sumOfNextNumbers } from "../src/day9";

describe("day 9 exercise 1", () => {
  it("returns the next number in the order", () => {
    const line = "0 3 6 9 12 15";
    expect(nextNumber(line)).toBe(18);

    expect(nextNumber("1 3 6 10 15 21")).toBe(28);

    expect(nextNumber("10 13 16 21 30 45")).toBe(68);
  });

  it("returns the next number in the order", () => {
    const lines = ["0 3 6 9 12 15", "1 3 6 10 15 21", "10 13 16 21 30 45"];

    expect(sumOfNextNumbers(lines)).toBe(114);
  });
});
