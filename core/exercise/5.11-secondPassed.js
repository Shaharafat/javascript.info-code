function getSecondsToday() {
  let date = new Date();
  return (date.getHours() * 60 + date.getMinutes()) * 60 + date.getSeconds();
}

console.log(getSecondsToday());


function getSecondsToday2() {
  let now = new Date();
  // create an object using the current day/month/year
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff = now - today; // ms difference
  return Math.round(diff / 1000); // make seconds
}

console.log( getSecondsToday2() );