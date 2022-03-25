// let count = 0;
// const getData = () => {
//   console.log("...fetching...", count++, inputEl.value);
// };

// const debounce = function (fn, d) {
//   let timer;
//   return function () {
//     let context = this;
//     args = arguments;
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(context, args);
//     }, d);
//   };
// };

// const finalGetData = debounce(getData, 300);

const inputEl = document.querySelector("#productname");

let count = 0;
const mockFetch = () => {
  console.log(`...fetching...`, count++, inputEl.value);
};

function debounced(fn, delay) {
  let timer;
  return function () {
    let context = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

function throttle(fn, delay) {
  let flag = true;
  return function () {
    let context = this;
    args = arguments;
    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
}

const getData = debounced(mockFetch, 300);
