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

// TIME BOMB
function timeBomb() {
  for (var i = 0; i <= 5; i++) {
    function close(i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }
    close(i);
  }
}

// PRINT DELAY
var array = [1, 22, 11, 5];
function printDelay(arr) {
  arr.forEach((val) =>
    setTimeout(() => {
      console.log(val);
    }, val * 1000)
  );
}

// DEEP__COPY__OF__OBJECT
let obj = {
  name: {
    first: "sanket",
    last: "manmode",
  },
  address: {
    personal: {
      state: "maharashtra",
      city: "pune",
    },
    office: {
      state: "Assam",
      city: "Guwahati",
    },
  },
  company: "Ridecell",
  mentor: "Tanay",
};
let newObj = {};
const redditComments = [
  {
    content: "comment1",
    children: [
      {
        content: "comment2",
        children: [],
      },
    ],
  },
  {
    content: "comment3",
    children: [
      {
        content: "comment4",
        children: [
          {
            content: "comment5",
            children: [],
          },
        ],
      },
      {
        content: "comment6",
        children: [],
      },
    ],
  },
];
const deepCopy = (obj, parent) => {
  // METHOD-01 BY USING FOR IN
  for (key in obj) {
    if (typeof obj[key] === "object") {
      parent.length > 0
        ? deepCopy(obj[key], `${parent}_${key}`)
        : deepCopy(obj[key], key);
    } else {
      parent.length > 0
        ? (newObj[`${parent}_${key}`] = obj[key])
        : (newObj[key] = obj[key]);
    }
  }
  // METHOD-02 BY USING A FOR LOOP
  // const keys = Object.keys(obj);
  // for (let i = 0; i < keys.length; i++) {
  //   if (typeof obj[keys[i]] === "object") {
  //     parent.length > 0
  //       ? deepCopy(obj[keys[i]], `${parent}_${keys[i]}`)
  //       : deepCopy(obj[keys[i]], keys[i]);
  //   } else {
  //     parent.length > 0
  //       ? (newObj[`${parent}_${keys[i]}`] = obj[keys[i]])
  //       : (newObj[keys[i]] = obj[keys[i]]);
  //   }
  // }
};

// FLATTEN AN ARRAY
const flattenArr = [1, [2, [3, 4], 5], 6];
let newArr = [];
const flattenCopy = (arr) => {
  for (ele of arr) {
    if (typeof ele === "object") {
      flattenCopy(ele);
    } else {
      newArr.push(ele);
    }
  }
};
flattenCopy(flattenArr);
deepCopy(redditComments, "");

console.log("DEEP_COPY__OBJ", newObj);
console.log("DEEP_COPY__ARR", newArr);
// console.log("PRINT_DELAY", printDelay(array));
// console.log("TIMEBOMB", timeBomb());
console.log("#1", countAllVowels(str));
console.log("#2", reverseReverse(str));
console.log("#8", capitalizeFirstWord(str));
