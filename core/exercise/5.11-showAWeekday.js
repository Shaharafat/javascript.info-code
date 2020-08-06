let date = new Date(2012, 0, 3); // 3 jan 2012
console.log(date.getDay());

function getWeekDay(date) {
  let day = date.getDay();
  switch (day) {
    case "0": {
      console.log("SU");
      break;
    }
    case 1: {
      console.log("MO");
      break;
    }
    case 2: {
      console.log("TU");
      break;
    }
    case 3: {
      console.log("WE");
      break;
    }
    case 4: {
      console.log("TH");
      break;
    }
    case 5: {
      console.log("FR");
      break;
    }
    case 6: {
      console.log("SA");
      break;
    }
  }
}
console.log(getWeekDay(date));


// 🔥 alternate solution
function getWeekDays(date) {
  let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  return days[date.getDay()];
}

console.log(getWeekDays(date));