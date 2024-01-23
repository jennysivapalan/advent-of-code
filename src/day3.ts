export function sumValidParts(scheme: string[]) {
  const parts = validParts(scheme).map((p) => p.num);
  return parts.reduce((acc, value) => acc + value, 0);
}

export function validParts(scheme: string[]) {
  const points = createPoints(scheme);

  const nums = numbersWithCoords(points);

  return numbersAdjacentToSymbols(
    nums,
    points,
    points[points.length - 1].x,
    points[points.length - 1].y
  );
}

/**
 *
 * in valid parts - if part is surrounded by * add it as a propery on it with the co-oords
 * get valid parts
 * map over to get the * ones with the number [{number, coords of *}]
 * points - filter by * coords
 * for the *cords - get the numbers that have matching * coords and add to a list (list of list)
 * for each list - reduce to one list and multiple numbers
 * for list - reduce to one with sum
 *
 */
export function sumRatioGears(scheme: string[]) {
  const ratioGears: Array<Array<number>> = [];

  const parts = validParts(scheme);
  const partsNextToStar = parts.filter((p) => p.starSymbol);

  const pointsWithStar = createPoints(scheme).filter(
    (point) => point.value === "*"
  );
  pointsWithStar.forEach((point) => {
    const potentialGears = partsNextToStar.filter(
      (part) => part.starSymbol?.x === point.x && part.starSymbol.y === point.y
    );

    if (potentialGears.length > 1) {
      const nums = potentialGears.map((p) => p.num);
      ratioGears.push(nums);
    }
  });

  const multiplyEachList = ratioGears.flatMap((list) =>
    list.reduce((acc, value) => acc * value, 1)
  );

  return multiplyEachList.reduce((acc, value) => acc + value, 0);
}

type Point = {
  value: string;
  x: number;
  y: number;
};

//creates an array of points with their co-ordinate
function createPoints(scheme: string[]) {
  const dots: Point[] = [];
  scheme.forEach((line, rowNumber) => {
    for (let i = 0; i < line.length; i++) {
      const point = { value: line[i], x: i, y: rowNumber };
      dots.push(point);
    }
  });

  return dots;
}

type NumbersWithCoords = {
  value: number;
  xStart: number;
  xEnd: number;
  y: number;
};
//works out where the numbers are and creates a type with it's start and end x coords and it's y-coords
function numbersWithCoords(points: Point[]) {
  const validNumbers = [];
  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    const value = parseInt(point.value);
    if (!isNaN(value)) {
      let endOfNumber = false;
      const digits = [value];

      while (!endOfNumber) {
        i = i + 1;
        if (i < points.length) {
          const next = points[i];
          const nextValue = parseInt(next.value);
          !isNaN(nextValue) ? digits.push(nextValue) : (endOfNumber = true);
        } else endOfNumber = true;
      }

      const digitsToPower = digits
        .reverse()
        .map((digit, index) => digit * Math.pow(10, index))
        .reverse();
      const num = digitsToPower.reduce((acc, value) => acc + value, 0);
      const numbersWithCoords = {
        value: num,
        xStart: point.x,
        xEnd: digitsToPower.length + point.x,
        y: point.y,
      };
      validNumbers.push(numbersWithCoords);
    }
  }
  return validNumbers;
}

type Coords = {
  x: number;
  y: number;
};

type ValidPart = {
  num: number;
  starSymbol: Point | undefined;
};
//works out if a number has any symbols around it (so making it a valid part)
function numbersAdjacentToSymbols(
  numbers: NumbersWithCoords[],
  points: Point[],
  maxX: number,
  maxY: number
) {
  const validParts: ValidPart[] = [];
  numbers.forEach((num) => {
    const coordsToCheck: Coords[] = [];

    if (num.y !== 0) {
      //get line above number
      const lineAboveY = num.y - 1;

      for (let i = num.xStart; i < num.xEnd; i++) {
        coordsToCheck.push({ x: i, y: lineAboveY });
      }
      if (num.xStart !== 0)
        coordsToCheck.push({ x: num.xStart - 1, y: lineAboveY });
      if (num.xEnd !== maxX) coordsToCheck.push({ x: num.xEnd, y: lineAboveY });
    }

    if (num.y !== maxY) {
      //get line below
      const lineBelowY = num.y + 1;

      for (let i = num.xStart; i < num.xEnd; i++) {
        coordsToCheck.push({ x: i, y: lineBelowY });
      }
      if (num.xStart !== 0)
        coordsToCheck.push({ x: num.xStart - 1, y: lineBelowY });
      if (num.xEnd !== maxX) coordsToCheck.push({ x: num.xEnd, y: lineBelowY });
    }

    //get sides - same line
    if (num.xStart !== 0) coordsToCheck.push({ x: num.xStart - 1, y: num.y });

    if (num.xEnd !== maxX) coordsToCheck.push({ x: num.xEnd, y: num.y });

    //get the points of the co-ords
    const surroundingPoints = coordsToCheck.map((c) =>
      points.find((p) => p.x === c.x && p.y === c.y)
    );

    //are any * symbol so potentially a gear
    const starSymbol = surroundingPoints.find((p) => p && p.value === "*");

    //check if any of the surrpunding points are symbols
    const surroundingSymbols = surroundingPoints.filter((p) => {
      if (p) {
        const value = parseInt(p.value);

        return !isNaN(value) || p.value === "." ? false : true;
      } else return false;
    });
    if (surroundingSymbols.length > 0)
      validParts.push({ num: num.value, starSymbol: starSymbol });
  });
  return validParts;
}
