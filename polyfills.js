/**
 * map, use call() in polyfills
 */

Array.prototype.myMap = function (...args) {
  let arr = this;
  let callback = args[0];
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(callback(arr[i], i, arr));
  }
  return res;
};

const arr1 = [1, 2, 3, 4];
const res = arr1.myMap((ele, i, arr) => {
  return ele * 10;
});
// console.log('MY_MAP',res);

/**
 * filter
 */

Array.prototype.myFilter = function (callback) {
  let arr = this;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      res.push(arr[i]);
    }
  }
  return res;
};

const filter = arr1.myFilter((ele, i, arr) => {
  return ele % 2 === 0;
});

// console.log("MY_FILTER", filter);

/**
 * find
 */

Array.prototype.myFind = function (callback) {
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return arr[i];
    }
  }
};

const find_res = arr1.myFind((ele, i, arr) => {
  return ele == 4;
});

// console.log("MY_FIND", find_res);

/**
 * reduce
 */
Array.prototype.myReduce = function (...args) {
  let arr = this;
  let callBack = args[0];
  let initialValue = args[1];
  let res;
  for (let i = 0; i < arr.length; i++) {
    initialValue = callBack(initialValue, arr[i], i, arr);
  }
  return initialValue;
};

const my_reduce_res = arr1.myReduce((prevValue, currValue, i, arr) => {
  return prevValue * currValue;
}, 1);

// console.log("MY_REDUCE", my_reduce_res);

/**
 * bind, Function.prototype
 * The arguments object is a local variable available within all non-arrow functions
 */

let nameObj = {
  firstName: "John",
  lastName: "Doe",
  displatFirstName: function () {
    console.log(`${this.firstName}`);
  },
  displayLastName: function () {
    console.log(`${this.lastName}`);
  },
};

Function.prototype.myBind = function (...args) {
  let fn = this;
  let obj = args[0];
  return function (...arg) {
    fn.apply(obj, [...arg, args.slice(1)]);
  };
};

function printFullName(state, homeTown, age) {
  console.log(`${this.firstName} ${this.lastName} ${state} ${homeTown} ${age}`);
}

let getFirstName = nameObj.displatFirstName.myBind(nameObj, 23);
let getLastName = nameObj.displayLastName.myBind(nameObj, 23);
getFirstName();
getLastName();
