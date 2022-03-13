var MyObject = {
  foo: "bar",
  func: function () {
    var self = this;
    console.log("Outer func: this.foo = " + this.foo);
    console.log("Outer func: self.foo= " + self.foo);

    (function () {
      console.log("Inner func: this.foo= " + this.foo);
      console.log("Inner func: self.foo= " + self.foo);
    }());
  }
};
MyObject.func();