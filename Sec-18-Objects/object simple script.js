const person = {
  firstName: "John",lastName : "Doe",
  id       : 5566,
  fullName : function(){return this.firstName + " " + this.lastName;}
};
console.log(person);
console.log(person["firstName"]);//John
console.log(person.firstName);//John