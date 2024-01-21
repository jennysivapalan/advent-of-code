const TOTAL_CUBES = [
  { colour: "red", total: 12 },
  { colour: "green", total: 13 },
  { colour: "blue", total: 14 },
];

const gameId = (gameStr: string) => gameStr.split(":")[0].split(" ")[1];
const games = (gameStr: string) =>
  gameStr.split(": ").slice(1).join("").split(";");

const countAndColour = (cube: string) => {
  const countAndColour = cube.trim().split(" ");
  const count = Number(countAndColour[0]);
  const colour = countAndColour[1];
  return { colour: colour, count: count };
};

export function gameValidity(gameStr: string) {
  //check if any game is invalid
  const invalidGame = games(gameStr).find((game) => {
    const cubes = game.split(",");

    const invalidCubes = cubes.filter((cube) => {
      const countAndColourInGame = countAndColour(cube);
      const totalCube = TOTAL_CUBES.find(
        (c) => c.colour === countAndColourInGame.colour
      );
      return totalCube
        ? Number(countAndColourInGame.count) > totalCube.total
        : true; //if no cube colour found then must be invalid too
    });
    return invalidCubes.length > 0 ? true : false;
  });

  return invalidGame
    ? { gameId: Number(gameId(gameStr)), isValid: false }
    : { gameId: Number(gameId(gameStr)), isValid: true };
}

export function sumOfValidGames(games: string[]) {
  const gameStatus = games.map(gameValidity);
  const validGames = gameStatus
    .filter((game) => game.isValid)
    .map((g) => g.gameId);

  return validGames.reduce((acc, value) => acc + value, 0);
}

type GameMin = {
  gameId: number;
  red: number;
  green: number;
  blue: number;
  power: number;
};

export function gameCubesMin(gameStr: string): GameMin {
  const gamesPlayed = games(gameStr);
  const cubesInGames = gamesPlayed.flatMap((g) => {
    const cubes = g.split(",");
    return cubes.map((c) => countAndColour(c));
  });

  function getCountForColour(colour: string) {
    return cubesInGames
      .filter((c) => c.colour === colour)
      .sort((c1, c2) => c2.count - c1.count);
  }
  const redMax = getCountForColour("red")[0].count;
  const blueMax = getCountForColour("blue")[0].count;
  const greenMax = getCountForColour("green")[0].count;

  return {
    gameId: Number(gameId(gameStr)),
    red: redMax,
    green: greenMax,
    blue: blueMax,
    power: redMax * blueMax * greenMax,
  };
}

export function power(games: string[]) {
  const gamesMax = games.map(gameCubesMin);
  return gamesMax.reduce((acc, value) => acc + value.power, 0);
}
