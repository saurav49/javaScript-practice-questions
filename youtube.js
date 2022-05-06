// Debounce
// const productname = document.querySelector("#productname");
// const dataHandler = () => {
//   console.log(productname.value);
// };
// const debounce = (fn, delay) => {
//   let timer;
//   return function () {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn();
//     }, delay);
//   };
// };
// const getData = debounce(dataHandler, 300);

// ILLEGAL SHADOW
// function test() {
//   var a = "hello";
//   let b = "bye";

//   if (true) {
//     let a = "hi"; // legal shadow
//     var b = "googbye"; // illegal shadow
//     console.log(a);
//     console.log(b);
//   }
// }

// function abc() {
//   console.log(a);
//   var a = 10;
// }

// abc();

// // MAP, FILTER, REDUCE

// // q - polyfill for map
// const arr1 = [1, 2, 3, 4];
// Array.prototype.myMap = function (fn) {
//   const arr = this;
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     res.push(fn(arr[i], i));
//   }
//   return res;
// };

// console.log(arr1.myMap((ele, i) => ele * i));

// // q - polyfill for filter
// Array.prototype.myFilter = function (fn) {
//   const arr = this;
//   let res = [];

//   for (let i = 0; i < arr.length; i++) {
//     fn(arr[i], i) && res.push(arr[i]);
//   }
//   return res;
// };

// console.log(arr1.myFilter((ele, i) => ele > 2));

// // q - polyfill for reduce
// // arr.reduce((acc, prevValue) => acc+prevValue, 0)
// Array.prototype.myReduce = function (fn, initialValue) {
//   const arr = this;
//   let res = initialValue;

//   for (let i = 0; i < arr.length; i++) {
//     res = fn(res, arr[i], i, arr);
//   }

//   return res;
// };

// console.log(arr1.myReduce((acc, currValue) => acc + currValue, 0));

// let students = [
//   { name: "piyush", rollNum: 31, marks: 80 },
//   { name: "jenny", rollNum: 15, marks: 69 },
//   { name: "kaushal", rollNum: 16, marks: 35 },
//   { name: "dilpreet", rollNum: 7, marks: 55 },
// ];

// // q1 - Return the name of student in capital letters
// console.log(students.map((student) => student.name.toUpperCase()));
// // q2 - return student whose marks is greated than 60
// console.log(students.filter((student) => student.marks > 60));
// // q3 - return student whose marks is greated than 60 and roll number greater than 15
// console.log(
//   students.filter((student) => student.marks > 60 && student.rollNum > 15)
// );
// // q4 - return sum of marks of all student
// console.log(students.reduce((acc, prevValue) => prevValue.marks + acc, 0));

// // q5 - return only name of students who scored greater than 60
// console.log(
//   students
//     .filter((student) => student.marks > 60)
//     .map((student) => student.name)
// );

// // q6 - Return total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60
// console.log(
//   students
//     .map((student) =>
//       student.marks < 60
//         ? { ...student, marks: student.marks + 20 }
//         : { ...student }
//     )
//     .filter((student) => student.marks > 60)
//     .reduce((acc, prevValue) => prevValue.marks + acc, 0)
// );

// var arr = [2, 3, 4, 5];

// arr.forEach((ele, i) => {
//   console.log({ ele, i });
// });

// // FUNCTIONS

// // Function declaration, Function defination, Function statement
// function square(num) {
//   return num * num;
// }

// // Function Expression
// const square1 = function (num) {
//   return num * num;
// };

// // iife
// (function (x) {
//   return (function (y) {
//     console.log(x);
//   })(3);
// })(2);

// // q - Function scope - o/p based
// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// // q - Function Hoisting - o/p based
// var x = 21;

// var fun = function () {
//   console.log(x);
//   var x = 20;
// };

// fun();

// CLOSURE
// what will be logged to console

let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1; // shadow
    console.log(count);
  }
  console.log(count);
})();

// write a function that allows you to do this
function createBase(a) {
  return function (b) {
    return a + b;
  };
}

var addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));

// Time Optimization
// Take out the time consuming part and return a function which yields the output
// first run the fn which does the time consuming part and returns the function where we get the
// value
function find() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  };
}

const optimizedFn = find();
console.time("6");
optimizedFn(6);
console.timeEnd("6");
console.time("12");
optimizedFn(150);
console.timeEnd("12");

// Block scope and setTimeout

// function a() {
//   for (var i = 0; i < 3; i++) {
//     function inner(i) {
//       setTimeout(function log() {
//         console.log(i);
//       }, i * 1000);
//     }
//     inner(i);
//   }
// }
// a();

// how would you create a private counter
function counter() {
  var _counter = 0;

  function add(value) {
    _counter += value;
  }

  function retrive() {
    return `Counter ${_counter}`;
  }

  return {
    add,
    retrive,
  };
}
var c = counter();
c.add(5);
c.add(15);
console.log(c.retrive());

// what is module pattern

var module = (function () {
  function privateMethod() {}

  return {
    publicMethod: function () {
      privateMethod();
    },
  };
})();

// make this run only once
let view;
function likeTheVideo() {
  var ran = 0;
  return function () {
    ran += 1;
    if (ran === 1) {
      view = "Something";
      console.log(`hello ${view}`);
    }
  };
}

var runFn = likeTheVideo();
runFn();
runFn();
runFn();

// polyfill of the above

function once(fn, context) {
  var ran;

  return function () {
    if (fn) {
      ran = fn.apply(context || this, arguments);
      fn = null;
    }

    return ran;
  };
}

const hello = once((a, b) => console.log("hello", a, b), { a: 1, b: 2 });

hello(1, 2);
hello(1, 2);
hello(1, 2);

// memoize funtion

const clumsySquare = (num1, num2) => {
  for (let i = 0; i <= 100000000; i++) {}
  return num1 * num2;
};

function myMemoize(fn) {
  var cache = {};
  return function (...args) {
    if (cache[args.toString]) {
      return cache[args.toString];
    }
    cache[args.toString] = fn.apply(this, args);
    return cache[args.toString];
  };
}

console.time("first call");
const memoizedClumsy = myMemoize(clumsySquare);
console.log(memoizedClumsy(9467, 7649));
console.timeEnd("first call");

console.time("second call");
console.log(memoizedClumsy(9467, 7649));
console.timeEnd("second call");

// difference between closure and scope
// Closure: A function defined inside another function is closure, as
// the inner function has access to the variable of outer function even after the
// outer function is popped off the call stack

// Scope : tells us the what variable you have access to
