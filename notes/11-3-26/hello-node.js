import fs from "fs";

fs.readFileSync("testData.txt", "utf8");

console.log("Hello from Node!!");

for (let i = 0; i < 5; i++) {
    console.log(i**2);
}