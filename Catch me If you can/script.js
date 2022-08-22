let promise = new Promise((resolve, reject) => {
  console.log("Your Order is Placed");
  setTimeout(() => {
    resolve("Your Order is Ready");
    reject("Something Went Wrong");
  }, 3000);
});

promise.then((data) => console.log(data));
promise.catch((data) => console.log(data));
