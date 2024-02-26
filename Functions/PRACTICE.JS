function init() {
    var name = "Mozilla"; // name is a local variable created by init
    return function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
  }
 const x =  init();
x()
console.log(typeof undefined);
 