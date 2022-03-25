// FLATTEN AN ARRAY
const flattenArr = [1, [2, [3, 4], 5], 6];
let newArr = [];
const getFlattenArr = (arr) => {
  for (let ele of arr) {
    if (typeof ele === "object") {
      getFlattenArr(ele);
    } else {
      newArr.push(ele);
    }
  }
};
getFlattenArr(flattenArr);
console.log(newArr);

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
