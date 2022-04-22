// const memoize = (fn) => {
//   let cache = {};

//   return (...args) => {
//     if (args.toString() in cache) {
//       console.log({ cache });
//       return cache[args.toString()];
//     }
//     const result = fn(...args);
//     cache[args.toString()] = result;
//     return result;
//   };
// };

// const add3 = (num1, num2, num3) => num1 + num2 + num3;
// const addMany = (...args) =>
//   args.reduce((acc, currValue) => acc + currValue, 0);

// const memoizeSum3 = memoize(add3);
// const addManyMemoize = memoize(addMany);
// console.log(memoizeSum3(1, 2, 3));
// console.log(memoizeSum3(3, 4, 5));
// console.log(memoizeSum3(1, 2, 3));
// console.log(addManyMemoize(1, 2, 3, 5, 9, 12));
// console.log(addManyMemoize(1, 2, 3, 5, 9, 12));
// console.log(addManyMemoize(1, 2, 3, 5, 9, 14));

const memoize = (fn) => {
  let cache = {};

  return function (...args) {
    if (args.toString() in cache) {
      console.log({ cache });
      return cache[args.toString()];
    }
    const result = fn(...args);
    cache[args.toString()] = result;
    return result;
  };
};

const multiply = (...args) =>
  args.reduce((acc, currValue) => acc * currValue, 1);
const mulMemoize = memoize(multiply);
console.log("mulMemoize", mulMemoize(2, 4));

function memoizedFn(fn) {
  let cache = {};

  return function (...args) {
    if (!cache[args.toString()]) {
      cache[args.toString()] = fn.call(this, ...args);
    }
    return cache[args.toString()];
  };
}
