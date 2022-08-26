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

// }

// let counter=()=>{
//   return{
//     start:()=>{

//     },
//     stop:()=>{

//     }
//   }
// }

// let count = counter()

// count.start()
// setTimeout(() => {
//     count.stop()
// },6000)

function a(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
}

async function start() {
  // let promise = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("resolved");
  //   }, 1000);
  // });

  let result = await a(6000);

  return result;
}

console.log(start());
