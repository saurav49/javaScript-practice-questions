const str = "This is a sample text needs to be capitalize";

// #1: Count all vowels
const countAllVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let vowelCount = 0;
  str.split("").forEach((letter) => vowels.includes(letter) && vowelCount++);
  return vowelCount;
};
// #2: Reverse a string
const reverseReverse = (str) => {
  let newStr = "";
  let strArr = str.split("");
  for (let i = strArr.length - 1; i >= 0; i--) {
    newStr += strArr[i];
  }
  return newStr;
};
// #8: Capitalize All First Words In A Sentence
const capitalizeFirstWord = (str) => {
  // METHOD 0 (SELF SOLUTION)
  // return str.split(' ').map(word=>word.split('').map((val, i)=>i===0?val.toUpperCase():val).join('')).join(' ');
  // METHOD 1 (USING SLICE)
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};
console.log("#1", countAllVowels(str));
console.log("#2", reverseReverse(str));
console.log("#8", capitalizeFirstWord(str));
