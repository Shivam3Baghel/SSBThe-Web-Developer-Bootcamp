//Reduce excecutes a reducer function on each element of the array resulting in a single value
let x=[3,5,7,9,11].reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;
})
console.log(x);
let y=[3,5,7,9,11].reduce((total,price)=>{
    return total+price;
});
console.log(y);
const nums=[1,4,6,8];
let z=nums.reduce((x,y)=>{return x+y},100);
console.log(z);
// 35
// 35
// 119