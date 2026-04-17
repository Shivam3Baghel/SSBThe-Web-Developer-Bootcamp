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
const personWhichHasNormalFunction={
    firstName:"Shivam",
    lastName:"Singh Baghel",
    fullName:function(){
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(personWhichHasNormalFunction.fullName());


const personWhichHasArrowFunctionWithCurlyBrackets={
    firstName:"Shivam",
    lastName:"Singh Baghel",
    fullName:()=>{
        return `${this.firstName} ${this.lastName}`;
    }
}
console.log(personWhichHasArrowFunctionWithCurlyBrackets.fullName());


const personWhichHasArrowFunctionwithoutCurlyBrackets={
    firstName:"Shivam",
    lastName:"Singh Baghel",
    fullName:()=>
        `${this.firstName} ${this.lastName}`
}
console.log(personWhichHasArrowFunctionwithoutCurlyBrackets.fullName());
//O/P-
// 35
// 35
// 119
// Shivam Singh Baghel
// undefined undefined
// undefined undefined