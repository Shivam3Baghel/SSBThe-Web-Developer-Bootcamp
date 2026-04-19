let x={...[7,8,9]};//convert array elements into parameter
console.log(x);
const nums=[9,3,2,8];
Math.max(nums);//NaN
//use spread!
Math.max(...nums);//67
//same as calling:Math.max(9,3,2,8);
console.log("hello");
console.log(..."hello");
console.log("h","e","l");
const main=["Red","Green","Blue"];
const secondary=["Yellow","Brown","Purple"];
const allColors=[...main,...secondary,"black","white"];
console.log(allColors);
//spread with objects later

console.log({...[7,8,9]});
//O/P
// { '0': 7, '1': 8, '2': 9 }
// hello
// h e l l o
// h e l