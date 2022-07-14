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
