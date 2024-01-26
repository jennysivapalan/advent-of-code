export function points(line: string) {
  const nums = matchedNumbers(line);
  if (nums.length === 0) return 0;
  else {
    const toPowerOf = nums.length - 1;
    return Math.pow(2, toPowerOf);
  }
}

export function matchedNumbers(line: string) {
  const gameAndNumbers = line.split(":");
  const playerNumsAndScratcardNums = gameAndNumbers[1].split("|");

  const playerNums = playerNumsAndScratcardNums[0]
    .split(" ")
    .map((n) => parseInt(n))
    .filter((n) => !isNaN(n));
  const scratchardNums = playerNumsAndScratcardNums[1]
    .split(" ")
    .map((n) => parseInt(n))
    .filter((n) => !isNaN(n));

  const matchingNums = playerNums.filter((n) => scratchardNums.includes(n));
  return matchingNums;
}

export function totalPoints(lines: string[]) {
  return lines.map((l) => points(l)).reduce((acc, value) => acc + value, 0);
}

/**  "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53",
      "Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19",
      "Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1",
      "Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83",
      "Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36",
      "Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11", */

//map line - {id, matching.length, isprocessed} - list
//get largest card number
//create big id list and add all the ids.

//for each new list - get the next n numbers based on matching.length starting at id+1 (id+1 -> id+n) - add to
// if n > largest card stop adding

type ScratchCard = {
  id: number;
  numExtraCards: number;
  isProcessed: boolean;
};

export function totalScratchcards(lines: string[]) {
  const scards = lines.map((l) => totalForScratchCard(l));

  const firstPass = newList(scards);
  let processedCards = firstPass.filter((c) => c.isProcessed).length;

  let cardsStillToProcess = firstPass.filter((c) => !c.isProcessed);
  console.log(
    "total so far",
    processedCards,
    "left to do",
    cardsStillToProcess.length
  );
  while (cardsStillToProcess.length > 0) {
    const nextPass = newList(cardsStillToProcess);
    const newProcessedCards = nextPass.filter((c) => c.isProcessed);
    processedCards = processedCards + newProcessedCards.length;
    cardsStillToProcess = nextPass.filter((c) => !c.isProcessed);
    console.log(
      "total so far",
      processedCards,
      "left to do",
      cardsStillToProcess.length
    );
  }

  return processedCards;
}

function newList(scards: ScratchCard[]) {
  const totalCards: ScratchCard[] = [];

  scards.forEach((sc) => {
    const newCards = getCardIdsForCard(sc.id, scards);
    totalCards.push(...newCards);
  });
  return totalCards;
}

function totalForScratchCard(line: string) {
  const gameAndNumbers = line.split(":");
  const idStr = gameAndNumbers[0].split(" ");
  const id = parseInt(idStr[idStr.length - 1]);
  const nums = matchedNumbers(line);
  return { id: id, numExtraCards: nums.length, isProcessed: false };
}

function getCardIdsForCard(id: number, scards: ScratchCard[]) {
  const card = scards.find((sc) => sc.id === id);
  const cardIds = [];
  if (card) {
    const newCard = { ...card, isProcessed: true };
    cardIds.push(newCard);
    const startingIndex = id + 1;
    const endingIndex = id + 1 + card.numExtraCards;
    for (let i = startingIndex; i < endingIndex; i++) {
      const additionalCard = scards.find((s) => s.id === i);
      if (additionalCard) cardIds.push(additionalCard);
    }
  }
  return cardIds;
}
