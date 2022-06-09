import fetch from "node-fetch";
const URL = `https://mocki.io/v1/ecbcc1a8-c386-43ad-87bf-502f3bd8d13f`;

const delay = (time) => {
  return new Promise((resolve, reject) => {
    if (typeof time !== "number") {
      reject(new Error("time should be a valid number"));
    }
    setTimeout(() => {
      fetch(URL)
        .then((response) => response.json())
        .then((json) => resolve(json))
        .catch((err) => console.error(err));
    }, time);
  });
};

// delay(1000)
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

/**
 * implement a fakeFetch using promise and setTimeOut
 */

const fakeFetch = (time, msg) => {
  return new Promise((resolve, reject) => {
    if (typeof time !== "number") {
      reject(new Error("time should be a valid number"));
    }
    setTimeout(() => resolve({ success: true, msg }), time);
  });
};

fakeFetch(1000, "fake_fetch")
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

const delayPromise = (time) => {
  return new Promise((resolve, reject) => {
    if (typeof time !== "number") {
      reject(new Error("time should be a valid number"));
    }
    setTimeout(
      () =>
        fetch(URL)
          .then((res) => res.json())
          .then((json) => resolve(json))
          .catch((err) => console.error(err)),
      time
    );
  });
};

// TIP: if you are returning a new Promise remeber to cover the response in a resolve, otherwise you wont get the promise response

// delayPromise(2000)
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

function promise_all(...values) {
  return values.reduce((acc, value) => {
    return acc.then((results) => {
      return Promise.resolve(value).then((result) => [...results, result]);
    });
  }, Promise.resolve([]));
}

promise_all(
  fakeFetch(1000, "1000"),
  fakeFetch(2000, "2000"),
  fakeFetch(3000, "3000")
)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

//

const x = [1, 2, 3];
x[-1] = -1;

console.log(x, x[x.indexOf(10000)], x.indexOf(10000));
