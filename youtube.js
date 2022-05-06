// Debounce
const productname = document.querySelector("#productname");
const dataHandler = () => {
  console.log(productname.value);
};
const debounce = (fn, delay) => {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
};
const getData = debounce(dataHandler, 300);

const throttle = (fn, delay) => {};

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
