import * as fs from "fs";
import { getSeedList, getSeedToSoilMap, getSoilForSeed } from "../src/day5";

describe("day 5 exercise 1", () => {
  it("it determine the seeds list", () => {
    const lines = fs
      .readFileSync("src/input-data/day5.txt", "utf-8")
      .split("\n");
    const seeds = getSeedList(lines);
    expect(seeds.length).toBe(4);
    expect(seeds).toContain(79);
    expect(seeds).toContain(14);
    expect(seeds).toContain(55);
    expect(seeds).toContain(13);
  });

  it("it get the seed to soil map the seeds list", () => {
    const lines = fs
      .readFileSync("src/input-data/day5.txt", "utf-8")
      .split("\n");
    const seedsToSoilMap = getSeedToSoilMap(lines);
    expect(seedsToSoilMap.length).toBe(2);
    expect(seedsToSoilMap).toContain("50 98 2");
    expect(seedsToSoilMap).toContain("52 50 48");
  });

  it("should get the soil number for a seed number", () => {
    const lines = fs
      .readFileSync("src/input-data/day5.txt", "utf-8")
      .split("\n");
    const seedsToSoilMap = getSeedToSoilMap(lines);

    const soil = getSoilForSeed(79, seedsToSoilMap);
    expect(soil).toBe(81);

    const soil2 = getSoilForSeed(14, seedsToSoilMap);
    expect(soil2).toBe(14);
  });
});
