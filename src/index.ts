import { numberFromString, numberFromString2 } from "./day1";
import * as fs from "fs";
import { power, sumOfValidGames } from "./day2";
import { sumRatioGears, sumValidParts } from "./day3";
import { points, totalPoints, totalScratchcards } from "./day4";

//day 1 exercise
// const words = fs.readFileSync("src/input-data/day1.txt", "utf-8").split("\n");
// const exercise1Sum = total(words, numberFromString);
// console.log(exercise1Sum);
// const exercise2Sum = total(words, numberFromString2);
// console.log(exercise2Sum);

// //day 2 exercise
// const games = fs.readFileSync("src/input-data/day2.txt", "utf-8").split("\n");
// const total = sumOfValidGames(games);
// console.log(total);

// const powerOfGames = power(games);
// console.log(powerOfGames);

//day 3 exercise
// const scheme = fs.readFileSync("src/input-data/day3.txt", "utf-8").split("\n");
// //console.log(scheme);
// // const total = sumValidParts(scheme);
// // console.log(total);
// const ratioGears = sumRatioGears(scheme);
// console.log(ratioGears);

//day 4 exercise
const lines = fs.readFileSync("src/input-data/day4.txt", "utf-8").split("\n");
//console.log(totalPoints(lines));
console.log(totalScratchcards(lines));
