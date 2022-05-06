const data = {
  Person: [
    {
      name: "Ram",
      income: 50000,
      expenditure: {
        rent: 8000,
        fuel: 2000,
        other: 4500,
      },
    },
    {
      name: "Shyam",
      income: 45000,
      expenditure: {
        rent: 7000,
        fuel: 3000,
        other: 3500,
      },
    },
  ],
};

const calculateExpenditure = (expenditure, income) => {
  let amount = 0;
  for (let expName in expenditure) {
    amount += expenditure[expName];
  }
  return { exp: amount, amountSaved: income - amount };
};

const whoSavedTheMost = (obj) => {
  const res = [];
  for (let person of data.Person) {
    res.push({
      name: person.name,
      ...calculateExpenditure(person.expenditure, person.income),
    });
  }
  return res.sort((a, b) => a.amountSaved - b.amountSaved);
};

console.log(whoSavedTheMost(data));

// push all the array to the end
const arr = [1, 4, 0, 8, 0, 7];

const pushZeroToEnd = (arr) => {
  let n = 0;
  const res = [];
  for (let ele of arr) {
    ele > 0 ? res.push(ele) : (n += 1);
  }
  while (n > 0) {
    res.push(0);
    n -= 1;
  }
  return res;
};

console.log(pushZeroToEnd(arr));

// Given two arrays eg: [1,3,5] and [2,4] find the number of pairs where the element is 1st array is greater than elements in 2nd array. here the answer is 3, [3,2],[5,2] and [5,4] with minimum time complexity and no looping.

const arr1 = [1, 3, 5];
const arr2 = [2, 4];

// const findMaxElement = (arr1, arr2, n) => {
//     let maxElements = 0;

//     while() {

//     }
// }
