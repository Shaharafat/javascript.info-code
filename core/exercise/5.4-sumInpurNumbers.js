function sumInput() {
  let value = [];
  let data;
  while (data = prompt('Enter a number')) {
    if (!isFinite(data)) break;
    value.push(+data)
  }
  let sum =0;
  for (number of value) {
    sum += number;
    console.log(number);
  }
  console.log(value);
  return sum;
}
alert(sumInput())