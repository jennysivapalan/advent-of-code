const TOTAL_CUBES = [
  { colour: "red", total: 12 },
  { colour: "green", total: 13 },
  { colour: "blue", total: 14 },
];

export function gameValidity(gameStr: string) {
  const gameId = gameStr.split(":")[0].split(" ")[1];

  const games = gameStr.split(": ").slice(1).join("").split(";");

  //check if any game is invalid
  const invalidGame = games.find((game) => {
    const cubes = game.split(",");

    const invalidCubes = cubes.filter((cube) => {
      const cubeTrimmed = cube.trim();
      const countAndColour = cubeTrimmed.split(" ");
      const count = Number(countAndColour[0]);
      const colour = countAndColour[1];

      const totalCube = TOTAL_CUBES.find((c) => c.colour === colour);
      return totalCube ? count > totalCube.total : true; //if no cube colour found then must be invalid too
    });
    return invalidCubes.length > 0 ? true : false;
  });

  return invalidGame
    ? { gameId: Number(gameId), isValid: false }
    : { gameId: Number(gameId), isValid: true };
}

export function sumOfValidGames(games: string[]) {
  const gameStatus = games.map(gameValidity);
  const validGames = gameStatus
    .filter((game) => game.isValid)
    .map((g) => g.gameId);

  return validGames.reduce((acc, value) => acc + value, 0);
}
