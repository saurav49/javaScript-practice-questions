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

var bindGetter = printFullName.bind(nameObj, "arg");
bindGetter("arg1", "arg2");
//My__BIND
Function.prototype.myBind = function (scope, ...arg) {
  let fn = this;
  return function (...arg1) {
    fn.call(scope, ...arg, ...arg1);
  };
};
// Function.prototype.mybind = function (...args) {
//   let obj = this;
//   const params = args.slice(1);
//   return function (...args1) {
//     obj.apply(args[0], [...params, ...args1]);
//   };
// };

let getmyBindFullName = printFullName.myBind(nameObj, "Silchar", "Assam");
getmyBindFullName();
