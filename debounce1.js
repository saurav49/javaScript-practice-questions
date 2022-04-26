const inputEl = document.querySelector("#productname");

function debounce(cb, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb();
    }, delay);
  };
}

const handleInput = () => {
  console.log(inputEl.value);
};

// const getData = debounce(handleInput, 300);

function throttle(cb, delay) {
  let flag;
  console.log("throttle");
  return function () {
    if (flag) {
      cb();
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
}

const getData = throttle(handleInput, 300);
