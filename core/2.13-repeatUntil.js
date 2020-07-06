for (; ;) {
  let number = prompt("Enter a number greater than 100: ")
  if ((number > 100) & (number != '')) {
    alert(number);
    break
  } else {
    continue;
  }
}