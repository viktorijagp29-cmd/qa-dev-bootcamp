const fs = require('fs');
const text = fs.readFileSync('01-basics/data.csv','utf8').trim().split('\n');
const nums = text.slice(1).map(Number);
const sum = nums.reduce((a,b)=>a+b,0);
console.log(sum);

