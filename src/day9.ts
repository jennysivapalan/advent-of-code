export function sumOfNextNumbers(lines: string[], isAdd: boolean = true) {
  const nextNums = lines.map((l) => nextNumber(l, isAdd));

  return nextNums.reduce((acc, value) => acc + value, 0);
}

export function nextNumber(line: string, isAdd: boolean = true) {
  const nums = line.split(" ").map((n) => parseInt(n));
  const overallSequence = [];
  overallSequence.push(nums);

  let allZeroesFound = false;
  let currentLine = nums;

  while (!allZeroesFound) {
    let nextLine = [];
    for (let i = 0; i < currentLine.length - 1; i++) {
      const diff = currentLine[i + 1] - currentLine[i];
      nextLine.push(diff);
    }

    const lineIsAllZeros = nextLine.filter((n) => n === 0);

    allZeroesFound = lineIsAllZeros.length === nextLine.length;

    if (!allZeroesFound) overallSequence.push(nextLine);
    currentLine = nextLine;
  }

  if (isAdd) {
    return addNums(overallSequence);
  } else {
    return minusNums(overallSequence);
  }

  function addNums(overallSequence: number[][]) {
    const lastNumbers = overallSequence.map((n) => n[n.length - 1]);

    let overAllNum = 0;
    for (let i = lastNumbers.length - 1; i > -1; i--) {
      overAllNum = overAllNum + lastNumbers[i];
    }
    return overAllNum;
  }

  function minusNums(overallSequence: number[][]) {
    const firstNums = overallSequence.map((n) => n[0]);

    let overAllNum = 0;
    for (let i = firstNums.length - 1; i > -1; i--) {
      overAllNum = firstNums[i] - overAllNum;
    }
    return overAllNum;
  }
}
