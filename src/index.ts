import { total } from "./day1";
import * as fs from "fs";

//day 1 exercise
const words = fs.readFileSync("src/input-data/day1.txt", "utf-8").split("\n");
const sum = total(words);
console.log(sum);
