// const obj1 = { name: "John", age: 49 };
// function displayName(p1, p2, p3) {
//   console.log(`${this.name}, ${this.age} ${p1} ${p2} ${p3}`);
// }

// // bind
// Function.prototype.myBind = function (obj, ...args) {
//   let fn = this;
//   return function (...params) {
//     fn.apply(obj, [...args, ...params]);
//   };
// };
// const runMyBind = displayName.myBind(obj1, "param1", "param2");
// const originalBind = displayName.bind(obj1, "para1", "para2");
// runMyBind("param3");
// originalBind("para30");
// // call
// Function.prototype.myCall = function (obj, ...args) {
//   obj.funRef = this;
//   obj.funRef(...args);
// };
// displayName.myCall(obj1, "param1", "param2", "param321");
// displayName.call(obj1, "para1", "para2", "para321");
// // apply
// Function.prototype.myApply = function (obj, args) {
//   obj.funRef = this;
//   obj.funRef(...args);
// };
// displayName.myApply(obj1, ["param1", "param2", "param432"]);
// displayName.apply(obj1, ["para1", "para2", "para432"]);

// // Remove duplicate from an array
// const arr = [1, 2, 1, 3, 2, 5, 3, 4, 7];

// function removeDuplicate(arr) {
//   const resArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.indexOf(arr[i]) === i) {
//       resArr.push(arr[i]);
//     }
//   }
//   return resArr.sort((a, b) => a - b);
// }

// console.log(removeDuplicate(arr));

// // sort a list of objects
// var objs = [
//   { first_nom: "onion", price: "5" },
//   { first_nom: "potato", price: "10" },
//   { first_nom: "tomato", price: "1" },
// ];
// // If the compare function returns less than 0, then the sort() method sorts a at a lower index than b. Simply a will come before b.
// // If the compare function returns equal to 0, then the sort() method leaves the element positions as they are.
// // If the compare function returns greater than 0, then the sort() method sorts a at greater index than b. Simply a will come after b.

// console.log(objs.sort((a, b) => a.price - b.price));
// // flatten deep
// const flattenDeep = [1, [2, [3, 4], 5], 6, [7, 8, 9], [10]];

// const flattenDeepArr = (arr) => {
//   let res = [];
//   for (let ele of arr) {
//     if (typeof ele === "object") {
//       res = [...res, ...flattenDeepArr(ele)];
//     } else {
//       res.push(ele);
//     }
//   }
//   return res;
// };

// console.log(flattenDeepArr(flattenDeep));

// // function currying

// function sum(a) {
//   return function (b) {
//     if (b) {
//       return sum(a + b);
//     }
//     return a;
//   };
// }

// console.log(sum(1)(2)(3)(4)(5)());

// // clone deep
// const user = {
//   name: "John",
//   personalAddr: {
//     city: "Dehradun",
//     area: "Majra",
//   },
//   office: {
//     city: "Bengalore",
//     area: {
//       landmark: "hospital",
//     },
//   },
// };

// function cloneDeep(obj, parent) {
//   let res = {};
//   for (let key in obj) {
//     if (typeof obj[key] !== "object") {
//       if (parent) {
//         res[`${parent}_${key}`] = obj[key];
//       } else {
//         res[`${key}`] = obj[key];
//       }
//     } else {
//       if (parent) {
//         res = { ...res, ...cloneDeep(obj[key], `${parent}_${key}`) };
//       } else {
//         res = { ...res, ...cloneDeep(obj[key], `${key}`) };
//       }
//     }
//   }
//   return res;
// }
// console.log(cloneDeep(user, "user"));

// function currying
function curryingSum(a) {
  return function (b) {
    if (b) {
      return curryingSum(a + b);
    }
    return a;
  };
}
console.log(curryingSum(1)(2)(3)());

const word = "abaaab"; // ab, aba, abaa, abaaa, ba, baa, baaa, baaab,

// Find substrings of a string and check the palidrome  or not  and return array of substrings
function isPalindrome(word) {
  if (word.length < 2) {
    return false;
  }
  let i = 0,
    j = word.length - 1;
  while (j > i) {
    if (word[i].toLowerCase() !== word[j].toLowerCase()) {
      return false;
    }
    i += 1;
    j -= 1;
  }
  return true;
}

console.log(isPalindrome("ajay"));

function findAllSubstring(word) {
  const subStringArr = [];
  const palindromeSubstring = [];

  // O(N2) -  time complexity
  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length + 1; j++) {
      subStringArr.push(word.substring(i, j));
    }
  }
  for (let word of subStringArr) {
    isPalindrome(word) && palindromeSubstring.push(word);
  }
  return palindromeSubstring;
}

console.log(findAllSubstring("abaab"));

// ROC8 QUESTION BANK
// WAP to replicate map function without using map
const arr2 = [1, 2, 3];
Array.prototype.myMap = function (fn) {
  let arr = this;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i], i));
  }
  return res;
};

console.log(
  "myMap",
  arr2.myMap((val, idx) => val + idx)
); // 1, 3, 5

// recursion solution to finding a factorial
function factorial(num) {
  if (num === 0) {
    return 1;
  }
  if (num === 1) {
    return num;
  }
  let res = num * factorial(num - 1);
  return res;
}
console.log("factorial", factorial(5)); // 120

// Sum of digits at even places of a number
function sumOfEvenPlaces(num) {
  let numArr = num.toString().split("");
  let res = 0;
  for (let i = 1; i <= numArr.length; i++) {
    if (i % 2 === 0) {
      res += +numArr[i - 1];
    }
  }
  return res;
}

console.log(sumOfEvenPlaces(54873)); // 11E, 16O

// rotate string and Pyramid pattern print
const strRotate = "Hello there";
const rotateStr = (str) => {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
};
console.log("rotateStr", rotateStr(strRotate));
// *
// * *
//* * *
const drawPyramid = (n) => {
  while (n > 0) {
    let line = "";
    for (let i = 0; i < n; i++) {
      line += "*";
    }
    n -= 1;
    console.log(line);
  }
};
drawPyramid(3);
(function () {
  let count = 0;
  function incrementCount() {
    count += 1;
    console.log(count);
  }
  incrementCount();
})();

function Memoization(fn) {
  let cache = {};
  return function (num1, num2) {
    if (cache[`${num1}${num2}`]) return cache[`${num1}${num2}`];
    cache[`${num1}${num2}`] = fn(num1, num2);
    return cache[`${num1}${num2}`];
  };
}

function addNums(num1, num2) {
  for (let i = 0; i < 1000000000; i++) {}
  return num1 + num2;
}

const memoizedSum = Memoization(addNums);
console.time("first call");
console.log(memoizedSum(5, 3));
console.timeEnd("first call");

console.time("second call");
console.log(memoizedSum(5, 3));
console.timeEnd("second call");
