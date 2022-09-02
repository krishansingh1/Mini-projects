let rectangle = document.getElementById("rectangle");
// let left = 0;
// let right = 0;
// const vw = Math.max(
//   document.documentElement.clientWidth || 0,
//   window.innerWidth || 0
// );
// const vh = Math.max(
//   document.documentElement.clientHeight || 0,
//   window.innerHeight || 0
// );
// console.log(vw, vh);
rectangle.addEventListener("mouseover", catchMe(this));

// function newHeight() {
//   h = window.innerHeight - 50;
//   nh = Math.floor(Math.random() * h);
//   return nh;
// }

// function newWidth() {
//   w = window.innerWidth - 50;
//   nw = Math.floor(Math.random() * w);
//   return nw;
// }

function catchMe(el) {
  el.style.top = getRandom(0, window.innerHeight - el.offsetHeight) + "px";
  el.style.left = getRandom(0, window.innerWidth - el.offsetWidth) + "px";
}

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function random() {
  // e.preventDefault();
  let newH = newHeight();
  let newW = newWidth();
  // console.log(newH, newW);
  left = newH;
  right = newW;
  console.log(left);
  console.log(right);

  rectangle.style.left = left + "px";
  rectangle.style.top = right + "px";

  if (left === vh) {
    left = 0;
    rectangle.style.left = left + "px";
  }
  if (right === vw) {
    right = 0;
    rectangle.style.top = right + "px";
  }
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
