// const fs=require("fs");
// const hi=fs.readFileSync("a.txt","utf-8");
// console.log(hi);


// const fs = require("fs");
// console.log("Attempting to read file...");
// const hi = fs.readFileSync("a.txt", "utf-8");
// console.log("File read successfully:", hi);

const fs=require('fs');
const hi=fs.readFileSync('./a.txt','utf8');
console.log(hi);