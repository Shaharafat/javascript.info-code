function fib(n) {
  f0 = 0;
  f1 = 1;
  let f; 

  for (let i = 1; i < n; i++){
    f = f0 + f1;
    f0 = f1;
    f1 = f;
  }
  
  return f1;
}

console.log(fib(77));