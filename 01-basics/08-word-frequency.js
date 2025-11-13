// 08-word-frequency.js

function wordFrequency(text) {
const words = text.toLowerCase().split(" ");
const frequency = {};
  for (let word of words) {
    if (frequency[word]) {
      frequency[word]++;
    } else {
      frequency[word] = 1;
    }
  }
  return frequency;
}
const input = "to be or not to be";
const result = wordFrequency(input);
console.log(result);
