import { numberFromString, total } from "../src/day1";

describe("day 1 exercise", () => {
  it("should return the first and last number in a string as a new number", () => {
    expect(numberFromString("1abc2")).toBe(12);
    expect(numberFromString("pqr3stu8vwx")).toBe(38);
    expect(numberFromString("a1b2c3d4e5f")).toBe(15);
    expect(numberFromString("treb7uchet")).toBe(77);
    expect(numberFromString("nonumbers")).toBe(0);
    expect(numberFromString("5sixeight")).toBe(55);
    expect(numberFromString("sixeight7")).toBe(77);
  });

  it("should return the sum of all new combined numbers", () => {
    const input = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];
    expect(total(input)).toBe(142);
  });
});
