let schedule = {};

isEmpty(schedule);
// isEmpty implementation
function isEmpty(obj) {
  let objArr = Object.keys(obj);
  if (objArr.length === 0) {
    console.log("empty");
  }
}

function isEmpt(obj) {
  for (let key in obj) {
    console.log(key);
    
  }
  console.log('Out of loop');
   
  
}

isEmpt(schedule)