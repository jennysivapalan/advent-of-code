import { numberFromString, numberFromString2, total } from "./day1";
import * as fs from "fs";

//day 1 exercise
const words = fs.readFileSync("src/input-data/day1.txt", "utf-8").split("\n");
const exercise1Sum = total(words, numberFromString);
console.log(exercise1Sum);
const exercise2Sum = total(words, numberFromString2);
console.log(exercise2Sum);
