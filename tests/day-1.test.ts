import { numberFromString, total, numberFromString2 } from "../src/day1";

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
    expect(total(input, numberFromString)).toBe(142);
  });

  it("should return the first and last number which contains numbers spelled as words in a string as a new number", () => {
    expect(numberFromString2("two1nine")).toBe(29);
    expect(numberFromString2("eightwothree")).toBe(83);

    expect(numberFromString2("abcone2threexyz")).toBe(13);

    expect(numberFromString2("xtwone3four")).toBe(24);

    expect(numberFromString2("4nineeightseven2")).toBe(42);

    expect(numberFromString2("zoneight234")).toBe(14);
    expect(numberFromString2("7pqrstsixteen")).toBe(76);
    expect(numberFromString2("nonumbers")).toBe(0);
    expect(numberFromString2("rtwof")).toBe(22);
  });

  it("should return the sum of all new combined numbers which also contain words of digits", () => {
    const input = [
      "two1nine",
      "eightwothree",
      "abcone2threexyz",
      "xtwone3four",
      "4nineeightseven2",
      "zoneight234",
      "7pqrstsixteen",
    ];
    expect(total(input, numberFromString2)).toBe(281);
  });
});
