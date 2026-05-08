const form=document.querySelector("#shelterForm");
const input=document.querySelector("#catName");
const list=document.querySelector("#cats")
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const catName=input.value;
    const newli=document.createElement("li");
    newli.innerText=catName;
    console.log(newli);
    list.append(newli);
})