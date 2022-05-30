// const data = {
//   Person: [
//     {
//       name: "Ram",
//       income: 50000,
//       expenditure: {
//         rent: 8000,
//         fuel: 2000,
//         other: 4500,
//       },
//     },
//     {
//       name: "Shyam",
//       income: 45000,
//       expenditure: {
//         rent: 7000,
//         fuel: 3000,
//         other: 3500,
//       },
//     },
//   ],
// };

// const calculateExpenditure = (expenditure, income) => {
//   let amount = 0;
//   for (let expName in expenditure) {
//     amount += expenditure[expName];
//   }
//   return { exp: amount, amountSaved: income - amount };
// };

// const whoSavedTheMost = (obj) => {
//   const res = [];
//   for (let person of data.Person) {
//     res.push({
//       name: person.name,
//       ...calculateExpenditure(person.expenditure, person.income),
//     });
//   }
//   return res.sort((a, b) => a.amountSaved - b.amountSaved);
// };

// console.log(whoSavedTheMost(data));

// // push all the array to the end
// const arr = [1, 4, 0, 8, 0, 7];

// const pushZeroToEnd = (arr) => {
//   let n = 0;
//   const res = [];
//   for (let ele of arr) {
//     ele > 0 ? res.push(ele) : (n += 1);
//   }
//   while (n > 0) {
//     res.push(0);
//     n -= 1;
//   }
//   return res;
// };

// console.log(pushZeroToEnd(arr));

// // Given two arrays eg: [1,3,5] and [2,4] find the number of pairs where the element is 1st array is greater than elements in 2nd array. here the answer is 3, [3,2],[5,2] and [5,4] with minimum time complexity and no looping.

// const arr1 = [1, 3, 5];
// const arr2 = [2, 4];

// // const findMaxElement = (arr1, arr2, n) => {
// //     let maxElements = 0;

// //     while() {

// //     }
// // }

// let arrObj = [
//   { name: "john", age: 23 },
//   { name: "jane", age: 22 },
// ];

// function insertAtIndex(arr, obj, idx) {
//   if (idx > arr.length || idx < 0) {
//     return -1;
//   } else if (idx === 0) {
//     return [obj, ...arr];
//   } else if (idx === arr.length) {
//     return [...arr, obj];
//   } else {
//     let res = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (i === idx) {
//         res.push(obj);
//         res.push(arr[i]);
//       } else {
//         res.push(arr[i]);
//       }
//     }
//     return res;
//     // return [...arr.slice(0, idx), obj, ...arr.slice(idx)];
//   }
// }

// arrObj = insertAtIndex(arrObj, { name: "max", age: 18 }, 1);
// console.log(arrObj);
// arrObj = insertAtIndex(arrObj, { name: "mox", age: 28 }, 2);
// console.log(arrObj);

// console.log("5" == 5);
// console.log(null === undefined);

// // const obj = {
// //   a: 1,
// //   b: 2,
// //   getA() {
// //     console.log(this.a);
// //     return this;
// //   },
// //   getB() {
// //     console.log(this.b);
// //   },
// // };

// // obj.getA().getB();
// // obj.getB();

// Array.prototype.print = function () {
//   let arr = this;
//   let res = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (i === arr.length - 1) {
//       res += `${arr[i]}`;
//     } else {
//       res += `${arr[i]}, `;
//     }
//   }
//   console.log(res);
//   return res;
// };

// let arr = [1, 2, 3, 4, 5];
// arr.print();

// const obj = {
//   a: {
//     b: {
//       c: 1,
//     },
//   },
// };

// function cloneObj(obj) {
//   let res = {};
//   for (let key in obj) {
//     console.log(typeof obj[key] === "object");
//     if (typeof obj[key] === "object") {
//       res = { [key]: cloneObj(obj[key]) };
//     } else {
//       return { [key]: obj[key] };
//     }
//   }
//   return res;
// }
// let clone = cloneObj(obj);
// console.log(clone, obj);
// clone.a.b.c = 3;
// console.log(clone, obj);

// const a = [1, 2, 5, 7, 9];
// const b = [2, 5, 7, 12, 100];

// // [1, 2, 2, 5, 5, 7, 7, 12, 100]

// function mergeTwoArr(arr1, arr2) {
//   return [...arr1, ...arr2];
// }

// function sortArr(arr) {
//   return arr.sort((a, b) => a - b);
// }

// console.log(sortArr(mergeTwoArr(a, b)));

// function mergeArr(arr1, arr2) {
//   let res = [];
//   let i,
//     j = 0;
//   while (i < arr1.length || j < arr2.length) {
//     if (arr1[i] > arr[j]) {
//       res.push(arr[j]);
//       j += 1;
//     } else {
//       res.push(arr[i]);
//       i += 1;
//     }
//   }
//   if (i === arr1.length && j < arr2.length) {
//     res = [...res, arr2.slice(j, arr2.length)];
//   } else {
//     res = [...res, arr1.slice(i, arr2.length)];
//   }
//   return res; // o(n+m) --> o(n)
// }

// console.log(mergeArr(a, b));

let arr = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8], 9],
  [10, 11, 12],
];
function flattenArr(arr) {
  let res = [];
  for (let ele of arr) {
    if (Array.isArray(ele)) {
      res = [...res, ...flattenArr(ele)];
    } else {
      res.push(ele);
    }
  }
  return res;
}

console.log(arr.flat(2));
console.log(flattenArr(arr));

function a() {
  for (var i = 0; i < 3; i++) {
    (function (x) {
      setTimeout(() => {
        console.log(x);
      }, i * 1000);
    })(i);
  }
}

a();
