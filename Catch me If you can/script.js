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
console.log("Your order is being placed place wait until your order is ready");
async function a() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("Your order is ready");
      reject("Something went wrong");
    }, 2000);
  });
  let result = await promise;
  return result;
}
console.log(a());
// a().then((data) => console.log(data));
a().catch((data) => console.log(data));
