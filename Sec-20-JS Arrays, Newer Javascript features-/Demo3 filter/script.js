let numbers=[-2,-1,0,1,2,3,4]
let evenNumbers=numbers.filter((element) => {
  return element%2==0;
});
console.log(evenNumbers);