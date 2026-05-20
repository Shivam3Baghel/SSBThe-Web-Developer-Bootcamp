fetch("https://swapi.tech/api/people/1/")
.then((res)=>{
    console.log("Resolved!",res);
    return res.json();
})
.then((data)=>{
    console.log("JSON DONE",data);
})
.catch((e)=>{
    console.log("Error!",e);
});