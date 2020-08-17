function loadScript(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(src);
    script.onerror = () => reject(new Error("script load error"));
    document.head.append(script);
  });
}

loadScript("./article/promise-chaining/one.js")
  .then((script) => loadScript("./article/promise-chaining/two.js"))
  .then((script) => loadScript("./article/promise-chaining/three.js"))
  .then(script => {
    // use functions declared in scripts.
    // to show that they indeed loaded.
    one();
    two();
    three();
  })

  
