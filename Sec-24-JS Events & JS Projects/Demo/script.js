const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};
myObject.greet(); // Greetings from Madrid
console.log(myObject);//{ city: 'Madrid', greet: [Function: greet] }
console.log(myObject.toString());//[object Object]
console.log(Object.getPrototypeOf(myObject));//[Object: null prototype] {}

//Shadowing Properties
const myDate = new Date(1995, 11, 17);
console.log(myDate.getTime()); // 819129600000
myDate.getTime = function () {
  console.log("something else!");
};
myDate.getTime(); // 'something else!'

//Setting a prototype using Object.create
let personPrototype = {
  greet() {
    console.log("hello!");
  },
};
const carl = Object.create(personPrototype);
carl.greet(); // hello!

// Using a constructor function(constructor functions are used to create objects of the same type quickly.)
personPrototype = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  },
};

function Person(name) {
  this.name = name;
}

Object.assign(Person.prototype, personPrototype);
// or
// Person.prototype.greet = personPrototype.greet;