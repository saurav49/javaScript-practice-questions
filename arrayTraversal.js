const arr1 = [1, 2, 3, 4, 5];

let sum = 0;

let summation = arr1.reduce(
  (prevValue, currValue) => prevValue + currValue,
  sum
);

console.log({ summation });
const list = [
  { one: { oneOne: 11, twoTwo: 22 }, two: 2 },
  { three: 3, four: 4, five: 5 },
];

const newList = list.reduce((acc, obj) => {
  Object.keys(obj).forEach((key) => (acc[key] = obj[key]));
  return acc;
}, {});
console.log(newList);

const arr2 = [10, 20, 30, 40, 50, 60, 70];

const resArr = arr1.reduce((acc, ele) => {
  acc.push([ele, arr2[arr1.indexOf(ele)]]);
  return acc;
}, []);
console.log({ resArr });

// currying
// function curry(f) {
//   return function (x) {
//     return function (y) {
//       return f(x, y);
//     };
//   };
// }

const adder = (x, y) => x + y;

// console.log(curry(adder)(2)(5));

function curry(x) {
  return function (y) {
    return x * y;
  };
}

let multiplyByTwo = curry(2);
console.log(multiplyByTwo(8));

// composition : composing two functions together
// currying: calling functions with some args now and some args later, done with bind or closure
// currySum(1)(2)(3)()

const currySum = (a) => {
  return function (b) {
    if (b) {
      return currySum(a + b);
    }
    return a;
  };
};

console.log(currySum(1)(2)(3)());
const joinStrNum = `hello there`;

// How do you replace one specific substring with another?
function replaceSubstring(str, replaceStr, replaceWith) {
  let res = "";
  let s = 0;
  while (s < str.length) {
    if (
      str[s] === replaceStr[0] &&
      str.substring(s, s + replaceStr.length) === replaceStr
    ) {
      res += replaceWith;
      s += replaceStr.length;
    } else {
      res += str[s];
      s += 1;
    }
  }
  return res;
}
console.log(replaceSubstring(joinStrNum, "hel", "leh"));

let letters = ["aa", "ab", "ac", "ad", "ae", "aa", "ab"];
let res = [];
for (let i = 0; i < letters.length; i++) {
  if (letters.indexOf(letters[i]) === i) {
    res.push(letters[i]);
  }
}
console.log(res);
let wordToRev = "JAVASCRIPT";
let revWord = "";
for (let i = wordToRev.length - 1; i >= 0; i--) {
  revWord += wordToRev[i];
}
console.log(revWord);
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(11));

let someWord = "Hello there";
let remWord = "";
function remWordFn(word, remove) {
  let flag = false;
  for (let letter of word) {
    if (letter !== remove) {
      remWord += letter;
    } else if (letter === remove && !flag) {
      flag = true;
    } else {
      remWord += letter;
    }
  }
}
remWordFn(someWord, "l");
console.log(remWord);

let dupliNum = [1, 2, 4, 5, 2, 1, 3];
let resDupliNum = [];
for (let i = 0; i < dupliNum.length; i++) {
  if (dupliNum.indexOf(dupliNum[i]) === i) {
    resDupliNum.push(dupliNum[i]);
  }
}
console.log(resDupliNum);
