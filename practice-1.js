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

function isAnagram(w1, w2) {
  if (w1.length !== w2.length) {
    return false;
  }

  let w1Obj = {};
  let w2Obj = {};

  for (let letter of w1) {
    if (w1Obj[letter]) {
      w1Obj[letter] += 1; // o(n)
    } else {
      w1Obj[letter] = 1;
    }
  }

  for (let letter of w2) {
    if (w2Obj[letter]) {
      w2Obj[letter] += 1; // o(n)
    } else {
      w2Obj[letter] = 1;
    }
  }

  for (let key in w1Obj) {
    // o(n)
    if (!w2Obj[key]) {
      return false;
    }

    if (w2Obj[key] && w2Obj[key] !== w1Obj[key]) return false;
  }

  return true; // o(n)
}

console.log(isAnagram("below", "elbow"));
// silent === tne
