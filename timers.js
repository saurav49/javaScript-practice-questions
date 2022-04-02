console.log("\n 1. setTimeout: ");

function printDelay(arr) {
  let sum = 0;
  for (let ele of arr) {
    sum += ele;
    setTimeout(() => {
      console.log(ele);
    }, sum * 1000);
  }
}

// const arr = [1, 22, 11, 5]; // print after every n seconds
// printDelay(arr);

console.log("\n 2. setInterval: ");

function bomb(fuse) {
  let i = fuse;
  let intervalId;
  intervalId = setInterval(() => {
    console.log(i);
    i--;
    if (i === 0) {
      console.log("Bang!!");
      clearInterval(intervalId);
    }
  }, 1000);
}

// bomb(10);

console.log("\n 3.setTimeout: ");

// closure remembers reference to variables
// let has a block scope, so each time the loop runs, the i will be recreated

// const arr2 = [10, 12, 15, 21];

// for (var i = 0; i < arr2.length; i++) {
//   function x(i) {
//     setTimeout(() => {
//       console.log(`index: ${i}, element: ${arr2[i]}`);
//     }, 3000);
//   }
//   x(i);
// }

// use var with setTimeout
console.log("\n 4.setTimeout: ");

for (var i = 0; i <= 5; i++) {
  // with iife
  (function (i) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  })(i);
  //   function x(i) {
  //     setTimeout(() => {
  //       console.log(i);
  //     }, i * 1000);
  //   }
  //   x(i);
}
