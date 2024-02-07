import { stepsToZ, createMap } from "../src/day8";
import * as fs from "fs";

describe("day 8 exercise 1", () => {
  it("returns the instructions as an object", () => {
    const input = ["RL", " ", "AAA = (BBB, CCC)", "BBB = (DDD, EEE)"];

    const output = createMap(input);
    expect(output.instructions).toBe("RL");
    expect(output.rows.length).toBe(2);
    expect(output.rows[0].source).toBe("AAA");
    expect(output.rows[0].destinationLeft).toBe("BBB");
    expect(output.rows[0].destinationRight).toBe("CCC");

    expect(output.rows[1].source).toBe("BBB");
    expect(output.rows[1].destinationLeft).toBe("DDD");
    expect(output.rows[1].destinationRight).toBe("EEE");
  });
  it("returns the number of steps to reach zzz", () => {
    const input = [
      "RL",
      " ",
      "AAA = (BBB, CCC)",
      "BBB = (DDD, EEE)",
      "CCC = (ZZZ, GGG)",
      "DDD = (DDD, DDD)",
      "EEE = (EEE, EEE)",
      "GGG = (GGG, GGG)",
      "ZZZ = (ZZZ, ZZZ)",
    ];

    expect(stepsToZ(input)).toBe(2);
  });

  it("returns the number of steps to reach zzz and keeps looping if it doesn't", () => {
    const input = [
      "LLR",
      " ",
      "AAA = (BBB, BBB)",
      "BBB = (AAA, ZZZ)",
      "ZZZ = (ZZZ, ZZZ)",
    ];

    expect(stepsToZ(input)).toBe(6);
  });
});
