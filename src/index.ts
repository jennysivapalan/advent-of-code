import { total } from "./day1";
import * as fs from "fs";

//day 1 exercise
const words = fs.readFileSync("src/day1-test.txt", "utf-8").split("\n");
const sum = total(words);
console.log(sum);
