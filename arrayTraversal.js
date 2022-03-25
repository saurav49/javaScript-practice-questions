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
