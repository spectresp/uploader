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




