export function numberFromString(str: string) {
  const strArray = str.split("");
  let firstNumber = undefined;
  let i = 0;

  while (firstNumber === undefined && i < strArray.length) {
    const charAsInt = Number.parseInt(strArray[i]);

    if (!Number.isNaN(charAsInt)) firstNumber = charAsInt * 10;
    i += 1;
  }

  let lastNumber = undefined;
  let j = strArray.length;

  while (lastNumber === undefined && j > -1) {
    const charAsInt = Number.parseInt(strArray[j]);
    if (!Number.isNaN(charAsInt)) lastNumber = charAsInt;
    j--;
  }
  return firstNumber && lastNumber ? firstNumber + lastNumber : 0;
}

export function total(strArray: string[]) {
  const sums = strArray.map((str, i) => numberFromString(str));
  console.log(sums.length);
  return sums.reduce((acc, value) => acc + value, 0);
}
