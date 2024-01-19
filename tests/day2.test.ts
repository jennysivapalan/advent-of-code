import { gameValidity, sumOfValidGames } from "../src/day2";

describe("day 2 exercise", () => {
  it("return if a game is possible", () => {
    const game = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green";
    expect(gameValidity(game).gameId).toBe(1);
    expect(gameValidity(game).isValid).toBe(true);

    const game3 =
      "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red";
    expect(gameValidity(game3).gameId).toBe(3);
    expect(gameValidity(game3).isValid).toBe(false);
  });

  it("calculate the sum of valid games", () => {
    const game1 = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green";
    const game2 =
      "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue";
    const game3 =
      "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red";
    const game4 =
      "Game 4: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue";
    expect(sumOfValidGames([game1, game2, game3, game4])).toBe(7);
  });
});
