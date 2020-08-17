function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(null, script);
  script.onError = () => callback(new Error("script load error."));

  document.head.append(script);
}

// 👀 rewrite using promises
function promiseLoadScript(src) {
  return new Promise(function (resolve, reject) {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(script);
    script.onError = () => reject(new Error("script load error."));

    document.head.append(script);
  });
}

let promise = promiseLoadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
);

promise.then(
  (script) => console.log(`${script.src} is loaded!`),
  (error) => console.log(`Error : ${error.message}`)
);
