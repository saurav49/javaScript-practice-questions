const obj1 = { name: "John", age: 49 };
function displayName(p1, p2, p3) {
  console.log(`${this.name}, ${this.age} ${p1} ${p2} ${p3}`);
}

// bind
Function.prototype.myBind = function (obj, ...args) {
  let fn = this;
  return function (...params) {
    fn.apply(obj, [...args, ...params]);
  };
};
const runMyBind = displayName.myBind(obj1, "param1", "param2");
const originalBind = displayName.bind(obj1, "para1", "para2");
runMyBind("param30");
originalBind("para30");
// call
Function.prototype.myCall = function (obj, ...args) {
  obj.funRef = this;
  obj.funRef(...args);
};
displayName.myCall(obj1, "param1", "param2", "param321");
displayName.call(obj1, "para1", "para2", "para321");
// apply
Function.prototype.myApply = function (obj, args) {
  obj.funRef = this;
  obj.funRef(...args);
};
displayName.myApply(obj1, ["param1", "param2", "param432"]);
displayName.apply(obj1, ["para1", "para2", "para432"]);

// Remove duplicate from an array
const arr = [1, 2, 1, 3, 2, 5, 3, 4, 7];

function removeDuplicate(arr) {
  const resArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === i) {
      resArr.push(arr[i]);
    }
  }
  return resArr.sort((a, b) => a - b);
}

console.log(removeDuplicate(arr));

// sort a list of objects
var objs = [
  { first_nom: "onion", price: "5" },
  { first_nom: "potato", price: "10" },
  { first_nom: "tomato", price: "1" },
];

console.log(objs.sort((a, b) => a.price - b.price));

// flatten deep
const flattenDeep = [1, [2, [3, 4], 5], 6, [7, 8, 9], [10]];

const flattenDeepArr = (arr) => {
  let res = [];

  for (let ele of arr) {
    console.log(ele, typeof ele);
    if (typeof ele !== "object") {
      res.push(ele);
    } else {
      res = [...res, ...flattenDeepArr(ele)];
    }
  }
  return res;
};

console.log(flattenDeepArr(flattenDeep));

// function currying

function sum(a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
}

console.log(sum(1)(2)(3)(4)(5)());

// clone deep
const user = {
  name: "John",
  personalAddr: {
    city: "Dehradun",
    area: "Majra",
  },
  office: {
    city: "Bengalore",
    area: {
      landmark: "hospital",
    },
  },
};

function cloneDeep(obj, parent) {
  let res = {};
  for (let key in obj) {
    if (typeof obj[key] !== "object") {
      if (parent) {
        res[`${parent}_${key}`] = obj[key];
      } else {
        res[`${key}`] = obj[key];
      }
    } else {
      if (parent) {
        res = { ...res, ...cloneDeep(obj[key], `${parent}_${key}`) };
      } else {
        res = { ...res, ...cloneDeep(obj[key], `${key}`) };
      }
    }
  }
  return res;
}
console.log(cloneDeep(user, "user"));
// o/p {  user_name: 'john', user_personalAddr_city:  }
