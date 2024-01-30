import { cardType, ordering, calculateWinnings } from "../src/day7";

describe("day 7 exercise 1", () => {
  it("returns the type of a hand", () => {
    expect(cardType("23456")).toBe(1); //high card
    expect(cardType("A23A4")).toBe(2); //1 pair
    expect(cardType("23432")).toBe(3); //2 pair
    expect(cardType("TTT98")).toBe(4); // 3 of a kind
    expect(cardType("23332")).toBe(5); // full house
    expect(cardType("AA8AA")).toBe(6); // four of a kind
    expect(cardType("AAAAA")).toBe(7); // five of a kind
  });

  it("returns a ranking order for cards that have different types", () => {
    const hands = ["23332", "A23A4", "23456", "AA8AA", "TTT98"];

    const cardsInOrder = ordering(hands);
    expect(cardsInOrder.length).toBe(5);
    expect(cardsInOrder[0]).toBe("23456");
    expect(cardsInOrder[1]).toBe("A23A4");
    expect(cardsInOrder[2]).toBe("TTT98");
    expect(cardsInOrder[3]).toBe("23332");
    expect(cardsInOrder[4]).toBe("AA8AA");
  });

  it("returns a ranking order for cards that have similar types", () => {
    const hands = ["32T3K", "T55J5", "KK677", "KTJJT", "QQQJA"];

    const cardsInOrder = ordering(hands);
    expect(cardsInOrder.length).toBe(5);
    expect(cardsInOrder[0]).toBe("32T3K");
    expect(cardsInOrder[1]).toBe("KTJJT");
    expect(cardsInOrder[2]).toBe("KK677");
    expect(cardsInOrder[3]).toBe("T55J5");
    expect(cardsInOrder[4]).toBe("QQQJA");
  });

  it("returns the total winnings for a set of hand", () => {
    const hands = [
      "32T3K 765",
      "T55J5 684",
      "KK677 28",
      "KTJJT 220",
      "QQQJA 483",
    ];
    const winnings = calculateWinnings(hands);
    expect(winnings).toBe(6440);
  });
});
