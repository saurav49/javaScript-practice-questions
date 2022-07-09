// let nameObj = {
//   firstname: "saurav",
//   lastname: "biswas",
// };

// const printFullName = function (hometown, state) {
//   console.log(`${this.firstname} ${this.lastname} from ${hometown} ${state}`);
// };

// // printFullName.call(nameObj, "Silchar", "Assam");
// // let name2 = {
// //   firstname: "Sachin",
// //   lastname: "Tendulkar",
// // };

// // FUNCTION BORROWING
// // printFullName.call(name2, "Mumbai", "Maharastra");

// //APPLY
// // printFullName.apply(name2, ["Mumbai", "Maharastra"]);

// //BIND
// let getFullName = printFullName.bind(nameObj, "Silchar");
// getFullName("Assam");

// var bindGetter = printFullName.bind(nameObj, "arg");
// bindGetter("arg1", "arg2");
// //My__BIND
// Function.prototype.myBind = function (scope, ...arg) {
//   let fn = this;
//   return function (...arg1) {
//     fn.call(scope, ...arg, ...arg1);
//   };
// };
// // Function.prototype.mybind = function (...args) {
// //   let obj = this;
// //   const params = args.slice(1);
// //   return function (...args1) {
// //     obj.apply(args[0], [...params, ...args1]);
// //   };
// // };

// let getmyBindFullName = printFullName.myBind(nameObj, "Silchar", "Assam");
// getmyBindFullName();

let name1 = {
  firstName: "Akshay",
  lastName: "Saini",
};

let name2 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};

function printFullName(homeTown, state) {
  console.log(`${this.firstName} ${this.lastName} from ${homeTown} ${state}`);
}

Function.prototype.myCall = function (...args) {
  let fn = this;
  let obj = args[0];
  obj._ = fn;

  obj._(...args.slice(1));
};

Function.prototype.myApply = function (obj, args) {
  let fn = this;
  obj._ = fn;

  obj._(...args);
};

Function.prototype.myBind = function (obj, ...args) {
  let fn = this;
  obj._ = fn;
  return (...args1) => {
    obj._(...args, ...args1);
  };
};

printFullName.myCall(name1, "new delhi", "delhi");
printFullName.myApply(name2, ["mumbai", "maharashtra"]);
const caller = printFullName.myBind(name1, "ghy");
caller("assam1");

let calculator = {
  a: 0,
  b: 0,
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read(3, 2);
console.log(calculator.sum());
console.log(calculator.mul());

let calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
  subtract(a) {
    this.total -= a;
    return this;
  },
};

const result = calc.add(10).multiply(5).subtract(30).add(25);
console.log(result.total);
