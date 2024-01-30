/** 
32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483 */

type Hand = {
  value: string;
  count: number;
};

export function cardType(cards: string) {
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
  console.log(typeGroups);

  switch (typeGroups.length) {
    case 5:
      return 1; //high card
    case 4:
      return 2; //1 pair
    case 3: {
      const threeOfKind = typeGroups.find((h) => h.count === 3); //three of a kind otherwise is 2 pair (rank 3)
      return threeOfKind ? 4 : 3;
    }
    case 2: {
      const fourOfKind = typeGroups.find((h) => h.count === 4); //four of a kind otherwise is full house (rank 5)

      return fourOfKind ? 6 : 5;
    }
    case 1:
      return 7;
    default:
      return 0;
  }
}

type Rank = {
  card: string;
  rank: number;
};
export function ranking(hand: string[]) {
  const ranks = hand.map((hand) => {
    const card = hand.split(" ")[0];
    const type = cardType(card);
    return { card: card, rank: type };
  });
  return ranks.sort((a, b) => a.rank - b.rank);
}
