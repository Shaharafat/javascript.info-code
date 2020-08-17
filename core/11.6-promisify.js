/**
 * 🔥 Promisification
  “Promisification” is a long word for a simple transformation. It’s the conversion of a function that accepts a callback into a function that returns a promise.

  Such transformations are often required in real-life, as many functions and libraries are callback-based. But promises are more convenient, so it makes sense to promisify them.

  For instance, we have loadScript(src, callback) from the chapter Introduction: callbacks. 
 */

function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`script load error for ${src}`));

  document.head.append(script);
}

let loadScriptPromise = function (src) {
  return new Promise((resolve, reject) => {
    loadScript(src, (err, script) => {
      if (err) reject(err);
      else resolve(script);
    });
  });
}

loadScriptPromise('https://api.github.com/users/shaharafat').then(response => console.dir(response),error => console.log(error.message))

