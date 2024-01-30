import { cardType, ranking } from "../src/day7";

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
    const hands = [
      "23332 765",
      "A23A4 684",
      "23456 28",
      "AA8AA 220",
      "TTT98 483",
    ];

    const ranks = ranking(hands);
    expect(ranks.length).toBe(5);
    expect(ranks[0].card).toBe("23456");
    expect(ranks[0].rank).toBe(1);

    expect(ranks[1].card).toBe("A23A4");
    expect(ranks[1].rank).toBe(2);

    expect(ranks[2].card).toBe("TTT98");
    expect(ranks[2].rank).toBe(4);

    expect(ranks[3].card).toBe("23332");
    expect(ranks[3].rank).toBe(5);

    expect(ranks[4].card).toBe("AA8AA");
    expect(ranks[4].rank).toBe(6);
  });
});
