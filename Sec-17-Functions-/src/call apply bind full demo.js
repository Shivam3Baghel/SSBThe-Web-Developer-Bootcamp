let person1={
  name:"Shivam Baghel",
  age:50,
  run:function (){console.log(1);return 2;},
  intro:function (city,country){return "My name is "+this.name+" "+city+" "+country;}
};
let person2={
  name:"Shivanshu Chaudhary"
};
console.log(person1.intro.call(person2,"Ghaziabad","India"));//object,funcn,call,object
console.log(person1.intro.apply(person2,["Ghaziabad","India"]));//object,funcn,apply,object
console.log((person1.intro.bind(person2))());
console.log((person1.intro.bind(person1))());//used to preserve this
//[Running] node "g:\WebDev,DSAinJS\SSBThe Web Developer Bootcamp\Sec-17-Functions-\src\call apply bind full demo.js"
//My name is Shivanshu Chaudhary Ghaziabad India
//My name is Shivanshu Chaudhary Ghaziabad India
//My name is Shivanshu Chaudhary undefined undefined
//My name is Shivam Baghel undefined undefined