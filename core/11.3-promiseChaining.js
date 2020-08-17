let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("promise 1 resolved"), 1000);
})
  .then((res) => {
    console.log(res);
    return res * 2;
  })
  .then(function(res) {
    console.log(res);
    return res*3;
  })

  .then((rej) => {
    console.log(rej);
  });

new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000); // (*)

}).then(function(result) { // (**)

  console.log(result); // 1
  return result * 2;

}).then(function(result) { // (***)

  console.log(result); // 2
  return result * 2;

}).then(function(result) {

  console.log(result); // 4
  return result * 2;

});

arr.reduce(value,in)