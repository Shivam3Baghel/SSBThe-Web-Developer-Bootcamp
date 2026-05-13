let p=Promise.reject("Error");
p
.then((msg)=>
{console.log(msg);
})
.catch((msg)=>{
console.log(msg);
});