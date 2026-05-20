axios.get("https://swapi.tech/api/people/1/")
.then((res)=>{
        console.log("RESPONSE-",res.data);
})
.catch((e)=>{
    console.log("Error! ",e);
});