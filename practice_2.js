// let sum = (a, b) => {
//   return a + b;
// };

// let calSum = (a, b, sum) => {
//   return sum(a, b);
// };

// console.log(calSum(10, 20, sum));

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("Hello from promise");
//     // resolve("Promise resolved");
//     reject("Promise rejected");
//   });
// };

// const promise = getPromise();

// promise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// function asyncFunction1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //   console.log("Data 1");
//       resolve("Async function1 resolved");
//     }, 2000);
//   });
// }

// function asyncFunction2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //   console.log("Data 2");
//       resolve("Async function2 resolved");
//     }, 2000);
//   });
// }

// console.log("fetching data1...");
// asyncFunction1().then((res) => {
//   console.log(res);
//   console.log("fetching data2...");
//   asyncFunction2().then((res) => {
//     console.log(res);
//   });
// });

// Promise chaining

// function asyncFunction1(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data ", dataId);
//       resolve("resolved");
//     }, 2000);
//   });
// }

// console.log("fetching data1...");
// asyncFunction1(1)
//   .then((res) => {
//     console.log("fetching data2...");
//     return asyncFunction1(2);
//   })
//   .then((res) => {
//     console.log("fetching data3...");
//     return asyncFunction1(3);
//   })
//   .then((res) => {
//     console.log(res);
//   });

// async await

function asyncFunction(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data ", dataId);
      resolve(200);
    }, 2000);
  });
}

(async function fetchData() {
  console.log("fetching data1...");
  await asyncFunction(1);
  console.log("fetching data2...");
  await asyncFunction(2);
  console.log("fetching data3...");
  await asyncFunction(3);
})();
