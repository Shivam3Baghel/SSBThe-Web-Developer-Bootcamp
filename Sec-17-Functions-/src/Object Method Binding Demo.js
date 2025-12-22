const person = {
  firstName  : "John",
  lastName   : "Doe",
  id         : 5566,
  myFunction : function() {
    return this;
  }
};
console.log(person.myFunction())
//{
//  firstName: 'John',
//  lastName: 'Doe',
//  id: 5566,
//  myFunction: [Function: myFunction]
//}
