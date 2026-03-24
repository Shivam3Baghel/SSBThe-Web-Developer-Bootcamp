//In unstrict mode or normal or default mode
function myF(){
    console.log(this);
}
myF();
(function myF(){
    console.log(this);
})();
//this keyword demo
let person1={
    name:"John",
    age:50,
    run:()=>{console.log(1);return 2;},
    intro:()=>{return "My name is "+this.name;}
}
let x= this;
console.log(this,x);//{} {}
console.log((function myF(){return "Hello"})());//Hello
console.log( (function myF() {
    return this;
  })());//undefined
console.log((person1.intro)());//My name is undefined
console.log(person1.name);//John