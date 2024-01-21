import { numberFromString, numberFromString2 } from "./day1";
import * as fs from "fs";
import { power, sumOfValidGames } from "./day2";

//day 1 exercise
// const words = fs.readFileSync("src/input-data/day1.txt", "utf-8").split("\n");
// const exercise1Sum = total(words, numberFromString);
// console.log(exercise1Sum);
// const exercise2Sum = total(words, numberFromString2);
// console.log(exercise2Sum);

//day 2 exercise
const games = fs.readFileSync("src/input-data/day2.txt", "utf-8").split("\n");
const total = sumOfValidGames(games);
console.log(total);

const powerOfGames = power(games);
console.log(powerOfGames);
