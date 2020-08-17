// function formatDate(date) {
//   let diff = Date.now() - date;
//   console.log(diff);
//   if (diff == 1) {
//     return "right now";
//   } else if (diff > 1000 && diff < 60 * 1000) {
//     return `${diff / 1000} sec. ago`;
//   } else if (diff > 60 * 1000 && diff < 60 * 60 * 1000) {
//     return `${diff / (60 * 1000)} min. ago`;
//   }
// }

function formatDate(date) {
  let diff = Date.now() - date;
  if (diff < 1000) {
    return `right now`;
  }

  let sec = Math.floor(diff / 1000);
  if (sec < 60) {
    return `${sec} sec. ago`;
  }

  let min = Math.floor(diff / (60 * 1000));
  if (min < 60) {
    return `${min} min. ago`;
  }

  // format the date
  // add leading zeroes to single digit day/month/hours/minutes
  let d = date;
  d = [
    "0" + d.getDate(),
    "0" + d.getMonth(),
    "" + d.getFullYear(),
    "0" + d.getHours(),
    "0" + d.getMinutes(),
  ].map(component => component.slice(-2));
  console.log(d);
  return d.slice(0, 3).join('.') + " " + d.slice(3).join(':');
}

console.log(formatDate(new Date(new Date() - 1)));

console.log(formatDate(new Date(new Date() - 30 * 1000)));

console.log(formatDate(new Date(new Date() - 5 * 60 * 1000)));

console.log( formatDate(new Date(new Date - 86400 * 1000)) );