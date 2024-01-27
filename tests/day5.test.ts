import * as fs from "fs";
import {
  getSeedList,
  getMap,
  getDestinationForSource,
  getLocation,
  getSmallestLocation,
} from "../src/day5";
import exp from "constants";

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
    const seedsToSoilMap = getMap(
      lines,
      "seed-to-soil map:",
      "soil-to-fertilizer map:"
    );
    expect(seedsToSoilMap.length).toBe(2);
    expect(seedsToSoilMap).toContain("50 98 2");
    expect(seedsToSoilMap).toContain("52 50 48");
  });

  it("should get the soil number for a seed number", () => {
    const lines = fs
      .readFileSync("src/input-data/day5.txt", "utf-8")
      .split("\n");
    const seedsToSoilMap = getMap(
      lines,
      "seed-to-soil map:",
      "soil-to-fertilizer map:"
    );
    const soil = getDestinationForSource(79, seedsToSoilMap);
    expect(soil).toBe(81);

    const soil2 = getDestinationForSource(14, seedsToSoilMap);
    expect(soil2).toBe(14);
  });

  it("should get the location number for a seed number", () => {
    const lines = fs
      .readFileSync("src/input-data/day5.txt", "utf-8")
      .split("\n");

    const location = getLocation(79, lines);
    expect(location).toBe(82);

    expect(getLocation(14, lines)).toBe(43);
  });

  it("should find the smallest location", () => {
    const lines = fs
      .readFileSync("src/input-data/day5.txt", "utf-8")
      .split("\n");

    const smallestLocation = getSmallestLocation(lines);
    expect(smallestLocation).toBe(35);
  });
});
