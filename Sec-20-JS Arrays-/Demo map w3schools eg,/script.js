const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);
function myFunction(value, index, array) {
  return value * 2;
}
console.log(numbers2);
//[ 90, 8, 18, 32, 50 ]