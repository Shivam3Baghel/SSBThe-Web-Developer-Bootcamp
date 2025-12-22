const person1 = {
  fullName: function () {
    return this.firstName + " " + this.lastName;},
  address: (city, country) => city + " in " + country
};
const person2 = {firstName: "John",
  lastName: "Doe",};
let x =person1.fullName.call(person2) +person1.address.call(person2, "Ghaziabad", "India") +
  person1.fullName.apply(person2) +
  person1.address.apply(person2, ["Chandigarh","India"]) +
  person1.fullName.bind(person2)() +
  person1.address.bind(person2, "Banglore", "India")() +
  person1.address.bind(person2, ["Mumbai"], ["India"])();
console.log(x);
//John DoeGhaziabad in IndiaJohn DoeChandigarh in IndiaJohn DoeBanglore in IndiaMumbai in India