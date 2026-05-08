const input=document.querySelector("input");
const h1=document.querySelector("h1");

input.addEventListener("change",(event)=>{
    console.log("change event!! listener triggered");
});
input.addEventListener("input",(event)=>{
    console.log("input event!! listener triggered");
    h1.innerText=input.value;
});