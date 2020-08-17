function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1);
  date.setDate(0);
  return date.getDate()
}

getLastDayOfMonth(2012,1)
console.log(getLastDayOfMonth(2019,11));