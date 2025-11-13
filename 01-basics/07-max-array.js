const numbers = [3, 8, -2, 5, 5];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i]; 
  }
}
console.log("The maximum number is:", max);