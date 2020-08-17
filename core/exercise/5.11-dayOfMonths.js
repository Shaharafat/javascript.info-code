let date = new Date(2015, 0, 2);

function getDateAgo(date, days) {
  let clone = date;
  clone.setDate(clone.getDate() - days);

  return clone.getDate();
}

console.log(getDateAgo(date, 1));

// 🔥 function should not change date
function getDateAgo2(date, days) {
  let dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}