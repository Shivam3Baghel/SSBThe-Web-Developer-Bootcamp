const makeRandomColor=()=>{
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`
}
const button1s=document.querySelectorAll("button");
for(let button of button1s){
    button.addEventListener("click",()=>{
        button.style.color=makeRandomColor()
        button.style.backgroundColor=makeRandomColor();
    });
}
const h1s=document.querySelectorAll("p");
for(let h1 of h1s){
    h1.addEventListener("click",()=>{
        h1.style.color=makeRandomColor();
        h1.style.backgroundColor=makeRandomColor();
    });
}

let colorize=()=>{
    this.style.color=makeRandomColor();
    this.style.backgroundColor=makeRandomColor();
}

const button2s=document.querySelectorAll("button .demothis");
for(let button of button2s){
    button.addEventListener("click",colorize);
}

const p2s=document.querySelectorAll("p .demothis");
for(let p of p2s){
    p.addEventListener("click",colorize);
}