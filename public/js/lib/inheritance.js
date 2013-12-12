// object create

// superclass
function Shape() {
  this.x = 0;
  this.y = 0;
}

// superclass method
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.log('shape moved');
}

// rectangle - subclass
function Rectangle() {
  Shape.call(this); // call the super constructor
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;




function A(a) {
  this.varA = a;
}

A.prototype = {
  varA: null,
  doIt: function() {
    console.log("A, do it");
  }
}

function B(a, b) {
  A.call(this, a);
  this.varB = b;
}

B.prototype = Object.create(A.prototype, {
  varB: {
    value: null,
    enumerable: true,
    configurable: true,
    writeble: true
  },
  doIt: {
    value: function() { // override
      A.prototype.doIt.apply(this, arguments); // call super
//      A.prototype.doIt.apply(this, arguments); // call super
    },
    enumerable: true,
    configurable: true,
    writeble: true
  }
});

var b = new B();
b.doIt();
console.log("varA: " + b.varA);