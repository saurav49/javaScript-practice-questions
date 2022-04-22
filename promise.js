import fetch from "node-fetch";
const URL = `https://mocki.io/v1/ecbcc1a8-c386-43ad-87bf-502f3bd8d13f`;

const delay = (URL, delayTime) => {
  return new Promise((resolve, reject) => {
    if (typeof delayTime !== "number") {
      reject(new Error("delayTime should be a valid number"));
    }
    setTimeout(() => {
      fetch(URL)
        .then((res) => res.json())
        .then((res) => resolve(res))
        .catch((err) => console.log(err));
    }, delayTime);
  });
};

delay(URL, 1000)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

function fakeFetch(msg, time) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject(new Error("delayTime should be a valid number"));
    }
    setTimeout(() => {
      resolve({ success: true, msg });
    }, time);
  });
}

fakeFetch("hello fake fetch", 1000)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

function promise_all(...arr) {
  return arr.reduce((acc, value) => {
    return acc.then((results) => {
      return Promise.resolve(value).then((res) => [...results, res]);
    });
  }, Promise.resolve([]));
}

promise_all(
  fakeFetch("promise_1", 1000),
  fakeFetch("promise_2", 2000),
  fakeFetch("promise_3", 3000)
)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// const delay = (time) => {
//   return new Promise((resolve, reject) => {
//     if (typeof time !== "number") {
//       reject(new Error("time should be a valid number"));
//     }
//     setTimeout(() => {
//       fetch(URL)
//         .then((response) => response.json())
//         .then((json) => resolve(json))
//         .catch((err) => console.error(err));
//     }, time);
//   });
// };

// // delay(1000)
// //   .then((response) => console.log(response))
// //   .catch((err) => console.error(err));

// /**
//  * implement a fakeFetch using promise and setTimeOut
//  */

// const fakeFetch = (time, msg) => {
//   return new Promise((resolve, reject) => {
//     if (typeof time !== "number") {
//       reject(new Error("time should be a valid number"));
//     }
//     setTimeout(() => resolve({ success: true, msg }), time);
//   });
// };

// fakeFetch(1000, "fake_fetch")
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

// const delayPromise = (time) => {
//   return new Promise((resolve, reject) => {
//     if (typeof time !== "number") {
//       reject(new Error("time should be a valid number"));
//     }
//     setTimeout(
//       () =>
//         fetch(URL)
//           .then((res) => res.json())
//           .then((json) => resolve(json))
//           .catch((err) => console.error(err)),
//       time
//     );
//   });
// };

// // TIP: if you are returning a new Promise remeber to cover the response in a resolve, otherwise you wont get the promise response

// // delayPromise(2000)
// //   .then((res) => console.log(res))
// //   .catch((err) => console.error(err));

// function promise_all(...values) {
//   return values.reduce((acc, value) => {
//     return acc.then((results) => {
//       return Promise.resolve(value).then((result) => [...results, result]);
//     });
//   }, Promise.resolve([]));
// }

// promise_all(
//   fakeFetch(1000, "1000"),
//   fakeFetch(2000, "2000"),
//   fakeFetch(3000, "3000")
// )
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}

const s = "123456";
const x = parseInt(s.substr(3, 2)) + 5;
console.log({ x }, s.substr(3, 2));
