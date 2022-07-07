// FLATTEN AN ARRAY
const flattenArr = [1, [2, [3, 4], 5], 6];
const getFlattenArr = (arr) => {
  let newArr = [];
  for (let ele of arr) {
    if (typeof ele !== "object") {
      newArr.push(ele);
    } else {
      newArr = [...newArr, ...getFlattenArr(ele)];
    }
  }
  return newArr;
};
console.log(getFlattenArr(flattenArr));

const redditComments = [
  {
    content: "comment1",
    children: [
      {
        content: "comment2",
        children: [],
      },
    ],
  },
  {
    content: "comment3",
    children: [
      {
        content: "comment4",
        children: [
          {
            content: "comment5",
            children: [],
          },
        ],
      },
      {
        content: "comment6",
        children: [],
      },
    ],
  },
];

// const recurCountToTen = (num) => {
//   if (num > 10) return;
//   console.log(num);
//   num++;
//   recurCountToTen(num);
// };

// recurCountToTen(0);

// fibonacci
// 0, 1, 1, 2, 3, 5, 8, 13, 21
let res = [0];
const fiboc = (series, num) => {
  if (series <= 0) return res;
  series--;
  res.push(num);
  fiboc(series, res[res.length - 1] + res[res.length - 2]);
};

const fibocRes = fiboc(13, 1);
console.log(res);

const val = 0;
const fibocNth = (place, num) => {
  if (place <= 1) return;
  place--;
  fiboc(place, num + val);
};
