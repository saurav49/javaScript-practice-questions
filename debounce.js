const inputEl = document.querySelector("#productname");

let count = 0;
const getData = () => {
  console.log("...fetching...", count++, inputEl.value);
};

const debounce = function (fn, d) {
  let timer;
  return function () {
    let context = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, d);
  };
};

const finalGetData = debounce(getData, 300);
