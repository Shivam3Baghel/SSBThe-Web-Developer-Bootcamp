//Iterating over a String
const fullName = "Shivam Singh Baghel";
let result= "";
for (const x of fullName) {
  result+= x + " ";
}
console.log(result);
//Iterating over an array
const letters=['a','b','c'];
result="";
for (let x of letters) {
    result += x + " ";
}
console.log(result);
const numbers=[2,4,5];
result="";
for (let x of numbers) {
    result += x + " ";
}
console.log(result);
//Iterating over a Set
