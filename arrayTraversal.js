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
