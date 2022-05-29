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

let arrObj = [
  { name: "john", age: 23 },
  { name: "jane", age: 22 },
];

function insertAtIndex(arr, obj, idx) {
  if (idx > arr.length || idx < 0) {
    return -1;
  } else if (idx === 0) {
    return [obj, ...arr];
  } else if (idx === arr.length) {
    return [...arr, obj];
  } else {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      if (i === idx) {
        res.push(obj);
        res.push(arr[i]);
      } else {
        res.push(arr[i]);
      }
    }
    return res;
    // return [...arr.slice(0, idx), obj, ...arr.slice(idx)];
  }
}

arrObj = insertAtIndex(arrObj, { name: "max", age: 18 }, 1);
console.log(arrObj);
arrObj = insertAtIndex(arrObj, { name: "mox", age: 28 }, 2);
console.log(arrObj);

function traverse(obj) {
  return [
    {
      title: obj["data"][0].attributes.title,
      authorName: obj["included"].find(
        (people) => people.id === obj["data"][0].relationship.author.data.id
      ).attributes.name,
      message: `${
        obj["included"].find(
          (people) => people.id === obj["data"][0].relationship.author.data.id
        ).attributes.name
      }, who is ${
        obj["included"].find(
          (people) =>
            people.id ===
            obj["data"][0].relationship.author.data.id[0].relationship.author
              .data.id
        ).attributes.age
      } years, said following; ${data[0].attributes.body} `,
    },
  ];
}

traverse({
  data: [
    {
      type: "articles",
      id: 1,
      attributes: {
        title: "",
        body: "",
        created: "",
        updated: "",
      },
      relationship: {
        author: {
          data: { id: 42, type: "people" },
        },
      },
    },
  ],
  included: [
    {
      type: "people",
      id: 42,
      age: 80,
      gender: "male",
    },
  ],
});
