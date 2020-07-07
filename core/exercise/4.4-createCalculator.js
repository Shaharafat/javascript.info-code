let calculator = {
  a: 0,
  b: 0,

  read() {
    this.a = Number(prompt("a?", 0));
    this.b = Number(prompt("b?",0))
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  }
}

calculator.read();
alert(calculator.sum())
alert(calculator.mul())