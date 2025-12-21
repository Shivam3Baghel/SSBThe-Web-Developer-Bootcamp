const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName+" "+this;
  }
};
let x = this;
console.log(
  person.fullName()+" "+this+" " +
    x +" " +
    (function myF() {
      return this;
    })());//John Doe [object Object] [object Object] [object Object] [object global]