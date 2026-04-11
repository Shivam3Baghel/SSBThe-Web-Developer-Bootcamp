//Demo of setTimeout and setInterval(also clearInterval),check whether expected o/p=real o/p
console.log("My name is Shivam Singh Baghel");
setTimeout(()=>{console.log("Hello!.");},5000);//the handler function will excecute after 5sec or 5000millisec.
console.log("My friends names are Mohit Raj, Sunil Kumar,etc.");
const id=setInterval(
    ()=>{console.log((Math.floor(Math.random()*6)+1));},
    2000);
setTimeout(()=>{clearInterval(id);},10000);
// My name is Shivam Singh Baghel
// My friends names are Mohit Raj, Sunil Kumar,etc.
// 1
// 6
// Hello!.
// 2
// 3

// [Done] exited with code=0 in 10.073 seconds

