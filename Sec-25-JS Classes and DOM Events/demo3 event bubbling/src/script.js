const button=document.querySelector("#changeColor");
const container=document.querySelector("#container");

button.addEventListener("click",(event)=>{
    container.style.backgroundColor=makeRandomColor();
    event.stopPropogation();
});
container.addEventListener("click",(event)=>{
    container.classList.toggle("hide");
});
const makeRandomColor=()=>{
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`;
}