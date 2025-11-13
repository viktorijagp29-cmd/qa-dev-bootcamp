const input = process.argv[2];
if (input === undefined) {
  console.log("Please provide a number. Example: node 06-even-odd.js 5");
  process.exit(1); 
}
if (isNaN(number)) {}
  console.log("That is not a valid number.");
  process.exit(1);
  if (number % 2 === 0) {
  console.log(`${number} is even`);
} else {
  console.log(`${number} is odd`);
}