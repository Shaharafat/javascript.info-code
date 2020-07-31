function work(a, b) {
  console.log(a + b); // work is an arbitrary function or method
}

function spyDecorator(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    // func(...args);
    // console.log(this);
    return func.apply(wrapper/*this = wrapper*/, args);
    
  }
  wrapper.calls = [];
  return wrapper;
}

work = spyDecorator(work);
work(1, 2);
work(4, 5);
work(3, 4);

for (let args of work.calls) {
  console.log("call: " + args.join());
}
