const clumsySqaure = (num1, num2) => {
  for (let i = 0; i < 100000000; i++) {}
  return num1 * num2;
};

const memoizedClumsySquare = memoizedFn(clumsySqaure);

console.time("first call");
console.log(memoizedClumsySquare(9567, 7891));
console.timeEnd("first call");

console.time("second call");
console.log(memoizedClumsySquare(9567, 7891));
console.timeEnd("second call");

function add(a) {
  return (b) => {
    if (b) {
      return add(a + b);
    }
    return a;
  };
}

console.log(add(5)(2)(4)(5)());

const calc = {
  total: 0,
  add: function (a) {
    this.total = this.total + a;
    return this;
  },
  multiply: function (a) {
    this.total = this.total * a;
    return this;
  },
  subtract: function (a) {
    this.total = this.total - a;
    return this;
  },
};

const result = calc.add(10).multiply(5).subtract(30).add(10);
console.log(result, result.total);
