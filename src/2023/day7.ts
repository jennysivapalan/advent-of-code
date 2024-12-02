type Hand = {
  value: string;
  count: number;
};

export function cardType(cards: string, hasJokerRuler: boolean = false) {
  const typeGroups: Hand[] = [];
  for (let i = 0; i < cards.length; i++) {
    const card = cards.charAt(i);
    const cardInGroup = typeGroups.find((h) => h.value === card);
    if (cardInGroup) {
      const index = typeGroups.indexOf(cardInGroup);
      const count = cardInGroup.count + 1;
      const newHand = { value: cardInGroup.value, count: count };
      typeGroups.splice(index, 1, newHand);
    } else typeGroups.push({ value: card, count: 1 });
  }

  const jokers = typeGroups.find((t) => t.value === "J");

  if (hasJokerRuler && jokers) {
    const countJokers = jokers.count;
    if (countJokers === 5) return 7; //5 of a kind
    const handWithoutJoker = typeGroups.filter((t) => t.value !== "J");

    const orderedByHand = handWithoutJoker.sort((a, b) => b.count - a.count);

    const highestHand = orderedByHand[0];

    const updateHand: Hand[] = orderedByHand.slice(1);
    updateHand.push({
      value: highestHand.value,
      count: countJokers + highestHand.count,
    });

    return handTypeGroup(updateHand);
  } else {
    return handTypeGroup(typeGroups);
  }
}

type Rank = {
  card: string;
  rank: number;
};
function handTypeGroup(hands: Hand[]) {
  switch (hands.length) {
    case 5:
      return 1; //high card
    case 4:
      return 2; //1 pair
    case 3: {
      const threeOfKind = hands.find((h) => h.count === 3); //three of a kind otherwise is 2 pair (rank 3)
      return threeOfKind ? 4 : 3;
    }
    case 2: {
      const fourOfKind = hands.find((h) => h.count === 4); //four of a kind otherwise is full house (rank 5)

      return fourOfKind ? 6 : 5;
    }
    case 1:
      return 7;
    default:
      return 0;
  }
}

export function ordering(hand: string[], hasJokerRuler: boolean = false) {
  const ranks = hand.map((card) => {
    const type = cardType(card, hasJokerRuler);
    return { card: card, rank: type };
  });
  const orderedRanks = ranks.sort((a, b) => {
    if (a.rank === b.rank) return compareHandsOfSameRank(a, b, hasJokerRuler);
    else return a.rank - b.rank;
  });
  return orderedRanks.map((card) => card.card);
}

const handOrderRegular = [
  "A",
  "K",
  "Q",
  "J",
  "T",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
];

const handOrderWithJoker = [
  "A",
  "K",
  "Q",
  "T",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "J",
];

function compareHandsOfSameRank(
  cardA: Rank,
  cardB: Rank,
  hasJokerRuler: boolean = false
) {
  let i = 0;

  while (i < 5) {
    const handOrder = hasJokerRuler ? handOrderWithJoker : handOrderRegular;
    const indexOfA = handOrder.indexOf(cardA.card.charAt(i));
    const indexOfB = handOrder.indexOf(cardB.card.charAt(i));
    if (indexOfA === indexOfB) i++;
    else return indexOfB - indexOfA;
  }
  return 0;
}

export function calculateWinnings(
  hands: string[],
  hasJokerRuler: boolean = false
) {
  const cardWithBid = hands.map((hand) => {
    const card = hand.split(" ")[0];
    const bid = parseInt(hand.split(" ")[1]);
    return { card: card, bid: bid };
  });

  const cards = hands.map((hand) => hand.split(" ")[0]);
  const orderCards = ordering(cards, hasJokerRuler);

  const winningsByCard = orderCards.map((card, index) => {
    const findBid = cardWithBid.find((c) => c.card === card);
    return findBid ? findBid.bid * (index + 1) : 0;
  });

  return winningsByCard.reduce((acc, value) => acc + value, 0);
}
