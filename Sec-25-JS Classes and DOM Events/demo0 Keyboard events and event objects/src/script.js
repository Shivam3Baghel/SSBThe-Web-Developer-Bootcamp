document.querySelector("button").addEventListener("click",()=>{
    console.log("clicked!");
});
document.querySelector("button").addEventListener("click",(event)=>{
    console.log(event);
});
let input=document.querySelector("input");
input.addEventListener("keydown",(event)=>{
    console.log("keydown");
    console.log(event.key);
    console.log(event.code);
});
input.addEventListener("keyup",(event)=>{
    console.log("keyup");
    console.log(event.key);
    console.log(event.code);
});