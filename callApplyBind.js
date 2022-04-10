let nameObj = {
  firstname: "saurav",
  lastname: "biswas",
};

const printFullName = function (hometown, state) {
  console.log(`${this.firstname} ${this.lastname} from ${hometown} ${state}`);
};

// printFullName.call(nameObj, "Silchar", "Assam");
// let name2 = {
//   firstname: "Sachin",
//   lastname: "Tendulkar",
// };

// FUNCTION BORROWING
// printFullName.call(name2, "Mumbai", "Maharastra");

//APPLY
// printFullName.apply(name2, ["Mumbai", "Maharastra"]);

//BIND
let getFullName = printFullName.bind(nameObj, "Silchar");
getFullName("Assam");

//My__BIND
Function.prototype.mybind = function (...args) {
  let obj = this;
  const params = args.slice(1);
  return function (...args1) {
    obj.apply(args[0], [...params, ...args1]);
  };
};

let getmyBindFullName = printFullName.mybind(nameObj, "Silchar", "Assam");
getmyBindFullName();

function greeting(city, state, fromBind) {
  console.log(
    `Hello ${this.firstname} ${this.lastname} ${city} ${state} ${fromBind}`
  );
}

let name = {
  firstname: "John",
  lastname: "Doe",
};

let name_1 = {
  firstname: "Jane",
  lastname: "Doe",
};

// Function.prototype.myBind = function (...arg) {
//   let fn = this;
//   let obj = arg[0];
//   return function (...args) {
//     fn.apply(obj, [...arg.slice(1), ...args]);
//   };
// };

// let getGreeting = greeting.myBind(name_1, "Assam", "Guwahati");
// getGreeting("calling using polyfill myBind");

Function.prototype.myCall = function (obj, ...args) {
  obj.fnRef = this;
  obj.fnRef(...args);
};

greeting.myCall(name_1, "Silchar", "Assam", "calling using polyfill myCall");

Function.prototype.myApply = function (obj, arg) {
  obj.fnRef = this;
  obj.fnRef(...arg);
};

greeting.myApply(name_1, [
  "Silchar",
  "Assam",
  "calling using polyfill myApply",
]);
