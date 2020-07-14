let styles = ['Jazz','Blues']
styles.push('Rock-n-Roll')
let middle = Math.floor(styles.length / 2);
styles[middle] = 'Classics'
console.log(styles);
console.log(styles.shift());
console.log(styles);
styles.unshift('Rap','Raggae')
console.log(styles);

let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
})

console.log(arr[2]());