// sum(2)(6)(1)

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(2)(6)(1));

function evaluate(type) {
  switch (type) {
    case "sum":
      return function (a) {
        return function (b) {
          return a + b;
        };
      };
    case "multiply":
      return function (a) {
        return function (b) {
          return a * b;
        };
      };
    case "divide":
      return function (a) {
        return function (b) {
          return a / b;
        };
      };
    case "substract":
      return function (a) {
        return function (b) {
          return a - b;
        };
      };
  }
}

console.log(evaluate("sum")(4)(2));
console.log(evaluate("multiply")(4)(2));
console.log(evaluate("divide")(4)(2));
console.log(evaluate("substract")(4)(2));

// infinite currying

function infiniteCurr(a) {
  return function (b) {
    if (b) {
      return infiniteCurr(a + b);
    }
    return a;
  };
}

console.log(infiniteCurr(1)(2)(3)(4)());
