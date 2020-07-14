function camelize(str) {
  str = str
    .split("-")
    .map((word, index) => {
      if (index === 0) {
        return word;
      } else {
        return word[0].toUpperCase() + word.slice(1);
        // return word;
      }
    })
    .join("");
  console.log(str);
}
camelize("background-color");
camelize("-webkit-transition");

// console.log('-webkit-transition'.split('-'));
