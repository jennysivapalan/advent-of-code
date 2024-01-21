import {
  gameCubesMin,
  gameValidity,
  sumOfValidGames,
  power,
} from "../src/day2";

describe("day 2 exercise 1", () => {
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
describe("day 2 exercise 2", () => {
  it("return the cubes needed per game", () => {
    const game = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green";
    const gameMins = gameCubesMin(game);
    expect(gameMins.gameId).toBe(1);
    expect(gameMins.red).toBe(4);
    expect(gameMins.blue).toBe(6);
    expect(gameMins.green).toBe(2);
    expect(gameMins.power).toBe(48);

    const game3 =
      "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red";
    const gameMins3 = gameCubesMin(game3);
    expect(gameMins3.gameId).toBe(3);
    expect(gameMins3.red).toBe(20);
    expect(gameMins3.blue).toBe(6);
    expect(gameMins3.green).toBe(13);
    expect(gameMins3.power).toBe(1560);
  });

  it("return the cubes needed per game", () => {
    const games = [
      "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
      "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
      "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
      "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
      "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green",
    ];

    expect(power(games)).toBe(2286);
  });
});
