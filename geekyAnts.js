// Find the smallest and biggest number of an array
const arr = [1, 5, 2, 7, 3];
function arrMinAndMax(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  return {
    min: sortedArr[0],
    max: sortedArr[arr.length - 1],
  };
}
console.log(arrMinAndMax(arr));

// Create a js function that takes a string as input and counts the number of characters and the time they appear in the string.
function strAndCount(str) {
  let res = {};
  const strArr = str.split("");
  for (let ele of strArr) {
    if (ele.toUpperCase() !== ele.toLowerCase()) {
      if (res[ele]) {
        res[ele] += 1;
      } else {
        res[ele] = 1;
      }
    }
  }
  return res;
}
console.log(strAndCount("saurav biswas"));

// sort array to 0’s and 1’s
const arrOnesZeros = [0, 1, 0, 1, 0, 0, 1, 1, 1, 0];
function SortArrOfOneZeros(arr) {
  //   let res = [];
  //   let count1s = 0;
  //   for (let ele of arr) {
  //     if (ele === 0) {
  //       res.push(0);
  //     } else {
  //       count1s += 1;
  //     }
  //   }
  //   while (count1s > 0) {
  //     res.push(1);
  //     count1s -= 1;
  //   }
  //   return res;
  return arr.sort((a, b) => a - b);
}
console.log(SortArrOfOneZeros(arrOnesZeros));

// currying function
function sum(a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    } else {
      return a;
    }
  };
}
console.log(sum(1)(2)(3)());
// stop setInterval after sometime
// let timesRun = 0;
// let timer = setInterval(() => {
//   timesRun += 1;
//   if (timesRun === 10) {
//     clearInterval(timer);
//   }
//   console.log(timesRun);
// }, 1000);

//connect the first string with itself and check if the second string is a substring of the first
const subsString = (s1, s2) => {
  const newStr = `${s1}${s1}`;
  let flag = false;
  let index = 0;
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === s2[0]) {
      flag = true;
      index = i;
      break;
    }
  }
  if (!flag) {
    return false;
  }

  for (let i = 1; i < s2.length; i++) {
    if (newStr.length > index + i && s2[i] !== newStr[index + i]) {
      return false;
    }
  }

  return true;
};
console.log(subsString("abc", "bca"));

//finding a product without multiplying.
const productWithoutMul = (num1, num2) => {
  let res = 0;
  while (num2 > 0) {
    res += num1;
    num2 -= 1;
  }
  return res;
};
console.log(productWithoutMul(12, 12));

//Sum of digits at even places of a number
const sumOfDigitsAtEvenPlaces = (num) => {
  let count = 0;
  let res = 0;
  while (num > 0) {
    ++count;
    if (count % 2 === 0) {
      res += num % 10;
    }
    num = Math.floor(num / 10);
  }
  return res;
};
console.log(sumOfDigitsAtEvenPlaces(3253));

// Write a JS func that takes an obj and a callback, execute the cb after 3 sec
// const delayCB = (obj, cb) => {
//   setTimeout(() => {
//     cb(obj);
//   }, 3000);
// };

// function callb(obj) {
//   console.log(obj.name);
// }

// delayCB({ name: "saurav" }, callb);

// WAP to replicate map function without using map
Array.prototype.myMap = function (cb) {
  let arr = this;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(cb(arr[i], i, arr));
  }
  return res;
};

console.log([2, 1, 4, 3].myMap((ele, i, arr) => ele * 2));

// let arr = [ " ( ", " } ", " ] " , " { ", " ) ", " [ " ]; to ["(", ")", "{", "}", "[", "]"] sort the array with pairs catch: a left brace has a high priority over right brace so in case of left brace "(" so we have to find it first pair ")" .
let arrBracket = [" ( ", " } ", " ] ", " { ", " ) ", " [ "];
const arrBracFun = (arr) => {
  let res = [];
  for (let ele of arr) {
    if (ele === " ( ") {
      res = [...res, "(", ")"];
    } else if (ele === " { ") {
      res = [...res, "{", "}"];
    } else if (ele === " [ ") {
      res = [...res, "[", "]"];
    }
  }
  return res;
};
console.log(arrBracFun(arrBracket));

// fun to check prime or not
const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % 2 === 0) {
      return false;
    }
  }
  return true;
};
console.log(isPrime(7));
console.log(isPrime(13));
console.log(isPrime(16));

// Create a function that takes 3 arguments function, interval, and frequency. the function should execute as many times as the frequency
//  we passed and there should be a delay equal to the interval
//  we passed. For eg our(() => console.log("hi"), 2, 3)
//  should print "hi" 3 times with a gap of 2 seconds between each execution.

// const executeFnTimes = (cb, delay, times) => {
//   for (let i = times; i > 0; i--) {
//     (function (x) {
//       setTimeout(() => {
//         cb();
//       }, delay * x * 1000);
//     })(i);
//   }
// };

// executeFnTimes(() => console.log("h1"), 2, 3);

// recursion to find factorial and Fibonacci series.
function factorial(num) {
  let res = 1;
  while (num > 0) {
    res *= num;
    num--;
  }
  return res;
}
console.log(factorial(5));

function fibonacciSeries(num) {
  if (num === 1) {
    return 0;
  }
  if (num === 2) {
    return 1;
  }
  return fibonacciSeries(num - 1) + fibonacciSeries(num - 2);
}
console.log(fibonacciSeries(8));

// Write a function which takes an array and returns sub arrays. for eg if we pass [1, 1, 2, 2, 4, 4, 5, 5, 5] as input we should get [[1,1,2,2], [4,4,5,5,5]] as output. The consecutive difference between 2 numbers should be 1 || -1.

// What is recursion? Pass an alphanumeric string to a recursive function and print if the character is a number, vowel, or consonant. eg. (“vivek123”)
function recusrionStr(str) {
  const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  if (str.length > 0) {
    if (
      str[0].toUpperCase() !== str[0].toLowerCase() ||
      numbs.includes(+str[0])
    ) {
      console.log(str[0]);
    }
    recusrionStr(str.slice(1, str.length));
  }
}
recusrionStr("vive_k!123");

function* generateId() {
  let id = 0;
  while (true) {
    yield id;
    id++;
  }
}

const generatorObj = generateId();
console.log(generatorObj.next().value);
console.log(generatorObj.next().value);
console.log(generatorObj.next().value);

const arr1 = [1, 1, 2, 2, 4, 4, 5, 5, 5];

function subArr(arr) {
  let res = [];
  let finalRes = [];
  for (let i = 0; i < arr.length - 1; i++) {
    console.log(
      "here",
      arr[i] - arr[i + 1],
      arr[i] - arr[i + 1] === 1 ||
        arr[i] - arr[i + 1] === 0 ||
        arr[i] - arr[i - 1] === -1
    );
    if (
      arr[i] - arr[i + 1] === 1 ||
      arr[i] - arr[i + 1] === 0 ||
      arr[i] - arr[i + 1] === -1
    ) {
      res.push(arr[i]);
      console.log("here1", { res });
    } else {
      console.log("here2", { res });
      res.length > 0 && finalRes.push(res);
      res = [];
    }
  }

  return finalRes;
}

console.log(subArr(arr1));
