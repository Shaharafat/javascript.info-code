
function Calculator() {
  this.methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  }
  this.addMethod = function (name, func) {
    return this.methods[name] = func;
  }

  this.calculate = function(str){
    let strSplit = str.split(' ');
    let a = +strSplit[0]
    let op = strSplit[1]
    let b = +strSplit[2]

    return this.methods[op](a,b)
  }


}

let cal = new Calculator;
console.log(Object.keys(cal));
cal.addMethod("*", (a, b) => a * b);
cal.addMethod("/", (a, b) => a / b);
console.log(cal.calculate("2 * 3"));
console.log(cal);