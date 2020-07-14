function extractCurrencyValue(str) {
  console.log(str);
  return +str.slice(1);
}

console.log(extractCurrencyValue('$120'));

// 👇 a one line solution 😄
// console.log('$12'.replace(/[^0-9]+/,''));

// console.log('$120'.slice(1));