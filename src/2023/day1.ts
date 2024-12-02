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

const DIGITS = [
  { number: 1, asLetters: "one" },
  { number: 2, asLetters: "two" },
  { number: 3, asLetters: "three" },
  { number: 4, asLetters: "four" },
  { number: 5, asLetters: "five" },
  { number: 6, asLetters: "six" },
  { number: 7, asLetters: "seven" },
  { number: 8, asLetters: "eight" },
  { number: 9, asLetters: "nine" },
];

const STARTING_LETTERS = ["o", "t", "f", "s", "e", "n"];

export const numberFromString2 = (str: string) => {
  const strArray = str.split("");

  const validDigits = [];
  for (let i = 0; i < strArray.length; i++) {
    const char = strArray[i];
    const charAsInt = Number.parseInt(char);

    if (!Number.isNaN(charAsInt)) validDigits.push(charAsInt);
    else {
      if (STARTING_LETTERS.includes(char)) {
        //check if the word if its a 3, 4 or 5 letter word in the DIGITS list
        const word = findWord(strArray, i, 3);
        if (word) {
          validDigits.push(word.number);
        } else {
          const word2 = findWord(strArray, i, 4);
          if (word2) {
            validDigits.push(word2.number);
          } else {
            const word3 = findWord(strArray, i, 5);
            if (word3) {
              validDigits.push(word3.number);
            }
          }
        }
      }
    }
  }
  if (validDigits.length === 0) return 0;
  else if (validDigits.length === 1)
    return validDigits[0] * 10 + validDigits[0];
  else {
    return validDigits[0] * 10 + validDigits[validDigits.length - 1];
  }
};

export function total(strArray: string[], stringFn: (str: string) => number) {
  const sums = strArray.map((str, i) => stringFn(str));
  return sums.reduce((acc, value) => acc + value, 0);
}

function findWord(
  strArray: string[],
  startingIndex: number,
  countChars: number
) {
  const potentialWord = strArray
    .slice(startingIndex, startingIndex + countChars)
    .join("");
  return DIGITS.find((word) => word.asLetters === potentialWord);
}
