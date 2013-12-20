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

//--------
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


//---
function BasePost(title) {
  this.title = title;
}

BasePost.prototype = {
  getTitle: function() {
    return this.title;
  },
  printTitle: function() {
    console.log("Title: " + this.getTitle())
  }
}
function Post(title) {
  BasePost.call(this, title);
}
Post.prototype = new BasePost();

var megaPost = new Post('mega');
var superPost = new Post('super');

console.log("mega: " + megaPost.printTitle());
console.log("super: " + superPost.printTitle());



function Super(type) {
  this.type = type;
  this.getType = function() {
    console.log("this type: " + this.type);
  }
}
function Sub() {
  this.sayIt = function() {
    console.log("said");
  }
}
Sub.prototype = new Super();
Sub.constructor = Sub;

var newSub = new Sub('subtype');
newSub.getType();
newSub.sayIt();

window.newSub = newSub;



// prototype constructor
function Mammal(type) {
  this.type = type;
}

Mammal.prototype.getType = function() {
  return this.type;
}

function Cat() {}
Cat.prototype = new Mammal('furry');
Cat.prototype.constructor = Cat;

var mii = new Cat();
console.log("mii type: " + mii.getType());



// object create
function PostBase(props) {
  this.title = props.title;
  this.content = props.content;
}
PostBase.prototype.getTitle = function() {
  return this.title;
}
PostBase.prototype.getContent = function() {
  return this.content;
}

var apost = new PostBase({title: "title", content: "content"});
var bpost = Object.create(apost);
bpost.title = 'btitle';
bpost.content = 'bcontent';

console.log("apost: " + apost.getTitle());
console.log("bpost: " + bpost.getTitle());

window.apost = apost;
window.bpost = bpost;


var myarray = [1,2,3,4,4];
console.log(Math.max.apply(Math, myarray));




function Person(n) {
  this.name = n;
  this.kosmo = 'im a kosmo ';
}
Person.prototype.says = function(){
  console.log('Hi, Im ' + this.name);
}
var jack = new Person('jack');

function sing(){
  console.log(this.name + ' sings');
}
sing.apply(jack);

function Flower(name){
  this.name = name;
}
var tulip = new Flower('tulip');
jack.says.apply(tulip);

function tee(t) {
  if(this.hasOwnProperty('kosmo')) console.log(this.kosmo + ' found');
}
tee.apply(jack);


//bb

var bbM1 = Backbone.Model.extend({
  test: function() {
    console.log("bbM1 test");
  }
});

var bbM2 = bbM1.extend({
  test: function() {

    console.log("bbM2 test f");
  }
});