export function stepsToZ(lines: string[]) {
  const map = createMap(lines);
  return stepsToZWithMap(map, "AAA");
}

export function stepsToZMultiple(lines: string[]) {
  const map = createMap(lines);
  const startingPointsEndingInA = map.rows.filter((row) =>
    row.source.endsWith("A")
  );

  const newCounts = startingPointsEndingInA.map((s) =>
    stepsToZWithMap(map, s.source)
  );
  console.log(startingPointsEndingInA, newCounts); //used a LCM calc
}

function stepsToZWithMap(map: Map, startingPoint: string = "AAA") {
  let foundZZZ = false;
  let line = map.rows.find((row) => row.source === startingPoint);
  let j = 0;
  let count = 0;

  while (!foundZZZ) {
    if (j === map.instructions.length) j = 0;

    const letter = map.instructions.charAt(j);
    if (line === undefined) line = map.rows[0];

    const newDestination =
      letter === "R" ? line.destinationRight : line.destinationLeft;

    if (newDestination.endsWith("Z")) {
      foundZZZ = true;
      return count + 1;
    } else {
      const newLine = map.rows.find((r) => r.source === newDestination);
      if (newLine !== undefined) line = newLine;
      j = j + 1;
      count = count + 1;
    }
  }
}

type Row = {
  source: string;
  destinationLeft: string;
  destinationRight: string;
};
type Map = {
  instructions: string;
  rows: Row[];
};
export function createMap(lines: string[]): Map {
  const instruction = lines[0];

  const rows: Row[] = lines.slice(2).map((line) => {
    const source = line.substring(0, 3);
    const destinationLeft = line.substring(7, 10);
    const destinationRight = line.substring(12, 15);
    return {
      source: source,
      destinationLeft: destinationLeft,
      destinationRight: destinationRight,
    };
  });
  return { instructions: instruction, rows: rows };
}
