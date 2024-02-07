import { numberFromString, numberFromString2 } from "./day1";
import * as fs from "fs";
import { power, sumOfValidGames } from "./day2";
import { sumRatioGears, sumValidParts } from "./day3";
import { points, totalPoints, totalScratchcards } from "./day4";
import { getSeedList, getSeedList2, getSmallestLocation } from "./day5";
import { calculateWinnings } from "./day7";
import { stepsToZ } from "./day8";

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

// //day 4 exercise
// const lines = fs.readFileSync("src/input-data/day4.txt", "utf-8").split("\n");
// //console.log(totalPoints(lines));
// console.log(totalScratchcards(lines));

//day 5 exercise
// const lines = fs
//   .readFileSync("src/input-data/day5-large.txt", "utf-8")
//   .split("\n");
// const smallestLocation = getSmallestLocation(lines, getSeedList2);
// console.log(smallestLocation);

//day 7
// const hands = fs.readFileSync("src/input-data/day7.txt", "utf-8").split("\n");
// const winnings = calculateWinnings(hands, true);
// console.log(winnings);

//day 7
const lines = fs.readFileSync("src/input-data/day8.txt", "utf-8").split("\n");
console.log(lines.slice(0, 10));
const z = stepsToZ(lines);
console.log(z);
