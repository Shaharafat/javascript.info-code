function filterRangeInPlace(arr, a, b){
  for (let index = 0; index < arr.length; index++){
    if ((arr[index] < a) || (arr[index] > b)) {
      arr.splice(index, 1);
      index--;
    }
  }
}

let arr = [5, 3,8, 1];

filterRangeInPlace(arr, 1, 3)
console.log(arr);