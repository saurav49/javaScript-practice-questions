// REPLACE A STRING
function myReplace(str, regexp, newWord) {
  const strArr = str.split(" ");
  let newStr = "";
  for (str of strArr) {
    if (regexp.test(str)) {
      newStr += ` ${newWord}`;
    } else {
      newStr += ` ${str}`;
    }
  }
  return newStr;
}
function myReplaceByWord(str, oldWord, newWord) {
  let newStr = "";
  // const index = str.indexOf(oldWord);
  // let newStr =
  //   str.substring(0, index) + newWord + str.substring(index + oldWord.length);
  const strArr = str.split(" ");
  for (let str of strArr) {
    if (str === oldWord) {
      newStr += ` ${newWord}`;
    } else {
      newStr += ` ${str}`;
    }
  }
  return newStr;
}

// CUSTOM SPLIT
function mySplit(str, splitBy) {
  let arr = [];
  let word = "";

  if (splitBy.length === 0) {
    for (let i = 0; i < str.length; i++) {
      arr.push(str[i]);
    }
    return arr;
  } else {
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== splitBy) {
        word += str[i];
      } else {
        arr.push(word);
        word = "";
      }
    }
  }
  if (word.length > 0) {
    arr.push(word);
    return arr;
  }
  return arr;
}
const str1 =
  "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";
const str = "hellothereanglesfrommynightmare";
// /**
//  * Capitalize first letter of each word
//  */

const capitalizeFirstLetter = (str) => {
  let newStr = "";
  let strArr = mySplit(str, " ");
  for (let ele of strArr) {
    newStr += `${ele.slice(0, 1).toUpperCase()}${ele.slice(1)} `;
  }
  return newStr;
};

function snakeCase1(str) {
  let newStr = "";
  let strArr = mySplit(str, " ");
  if (strArr.length === 1) {
    return str;
  }
  for (let i = 0; i < strArr.length - 1; i++) {
    newStr += `${strArr[i].toLowerCase()}_`;
  }
  newStr += strArr[strArr.length - 1];
  return newStr;
}

function myLowerCase(str) {
  let newStr = "";
  let A = "A".charCodeAt();
  let Z = "Z".charCodeAt();

  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt() >= A && str[i].charCodeAt() <= Z) {
      newStr += String.fromCharCode(str[i].charCodeAt() + 32);
    } else {
      newStr += str[i];
    }
  }

  return newStr;
}

function myUpperCase(str) {
  let newStr = "";
  let a = "a".charCodeAt();
  let z = "z".charCodeAt();

  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt() >= a && str[i].charCodeAt() <= z) {
      newStr += String.fromCharCode(str[i].charCodeAt() - 32);
    } else {
      newStr += str[i];
    }
  }

  return newStr;
}

// console.log(myReplace(str1, /lazy/g, "sloth like"));
// console.log("replace", myReplaceByWord(str1, "lazy", "fast"));
// console.log("mysplit", mySplit(str1, ""));
console.log("capitalize", capitalizeFirstLetter(str1));
console.log("snakeCase1", snakeCase1(str1));
console.log("myLowerCase", myLowerCase(str1));
console.log("myUpperCase", myUpperCase(str1));
