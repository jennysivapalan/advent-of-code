export function getSeedList(lines: string[]) {
  const seedsLine = lines.find((line) => line.startsWith("seeds:"));
  if (seedsLine) {
    const seeds = seedsLine.split("seeds:")[1].split(" ");
    const seedsAsNumbers = seeds.map((seed) => parseInt(seed));
    return seedsAsNumbers.filter((seed) => !isNaN(seed));
  } else return [];
}

export function getSeedToSoilMap(lines: string[]) {
  const seedToSoilIndex = lines.indexOf("seed-to-soil map:");

  const nextMapIndex = lines.indexOf("soil-to-fertilizer map:");

  if (seedToSoilIndex !== -1 && nextMapIndex !== -1) {
    return lines.slice(seedToSoilIndex + 1, nextMapIndex - 1);
  } else return [];
}

type Map = {
  destination: number;
  source: number;
  range: number;
};
/**
 * map over the string to create the Map object
 * find the max source that is lower than the seed number - 50
 * if none found return seed number for soil
 * get the seed (source) number and minus range 79 - 50 = 29.
 * add 29 to soil (destination) - 52 + 29 = 81
 *
 */
export function getSoilForSeed(seed: number, seedToSoilMap: string[]) {
  const map = seedToSoilMap.map((s) => {
    const line = s.split(" ");
    return {
      destination: parseInt(line[0]),
      source: parseInt(line[1]),
      range: parseInt(line[2]),
    };
  });

  const validMap = map.filter((m) => m.source <= seed);
  if (validMap.length === 0) return seed;

  const closestToSeedNumber = validMap.sort((a, b) => b.source - a.source);
  const line = closestToSeedNumber[0];

  const difference = seed - line.source;
  return line.destination + difference;
}
