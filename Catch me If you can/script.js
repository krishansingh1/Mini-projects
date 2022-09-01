let rectangle = document.getElementById("rectangle");

rectangle.addEventListener("mouseenter", (e) => {
  e.preventDefault();
  let newQ = newPosition();
  const position = rectangle.getBoundingClientRect();
  console.log(position);
  console.log(newQ);
  position.top = newQ;
  position.left = newQ;
});

function newPosition() {
  h = window.innerHeight - 50;
  w = window.innerWidth - 50;
  nh = Math.floor(Math.random() * h);
  nw = Math.floor(Math.random() * w);
  s = Math.floor(Math.random() * 1000) + 500;
  //   console.log(h, w, nh, nw, s);
  return [nh, nw, s];
}

// let promise = new Promise((resolve, reject) => {
//   console.log("Your Order is Placed");
//   setTimeout(() => {
//     resolve("Your Order is Ready");
//     reject("Something Went Wrong");
//   }, 3000);
// });

// console.log(promise);
// promise.then((data) => console.log(data));
// promise.catch((data) => console.log(data));
// console.log("Your order is being placed place wait until your order is ready");
// async function a() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // resolve("Your order is ready");
//       reject("Something went wrong");
//     }, 2000);
//   });
//   let result = await promise;
//   return result;
// }
// console.log(a());
// // a().then((data) => console.log(data));
// a().catch((data) => console.log(data));

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("a");
//   });
// });

// const promise2 = new Promise((resolve, reject) => {
//   resolve("b");
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("c");
//   }, 10);
// });

// Promise.race([promise1, promise2, promise3]).then((msg) => {
//   console.log(msg);
// });

// const delay = (time) => {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(resolve, time);
//   });
//   return promise;
// };

// let counter = () => {
//   let timer = 0;
//   let pause = false;

//   return {
//     start: async function start() {
//       for (let i = timer; ; i++) {
//         timer++;
//         if (pause) {
//           break;
//         }
//         console.log(i);
//         await delay(1000);
//       }
//     },
//     stop: function stop() {
//       pause = true;
//     },
//   };
// };

// let count = counter();

// count.start();
// setTimeout(() => {
//   count.stop();
// }, 6000);

// function randomAsyncFunction() {
//   const time = Math.floor(Math.random() * 100);
//   let x = setTimeout(() => {
//     console.log("Finished!!");
//   }, time);
// }

// async function asyncWithCallback(callback) {
//   randomAsyncFunction();
//   setTimeout(() => {
//     callback();
//   }, 1000);
// }

// asyncWithCallback(() => {
//   console.log("fsdfsa");
// });
