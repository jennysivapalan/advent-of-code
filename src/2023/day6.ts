export function differentWays(time: number, distance: number) {
  let winWay = 0;
  for (let i = 0; i < time; i++) {
    const distanceTravelled = i * (time - i);
    distanceTravelled > distance ? winWay++ : 0;
  }

  return winWay;
}

type Race = {
  time: number;
  distance: number;
};
export function multipleOfRaces(races: Race[]) {
  const winWays = races.map((race) => differentWays(race.time, race.distance));
  return winWays.reduce((acc, value) => acc * value, 1);
}
