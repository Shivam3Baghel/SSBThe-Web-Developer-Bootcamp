const load=async()=>{
    try{
        const res = await fetch("https://swapi.tech/api/people/1/");
        const data = await res.json();
        console.log(data);
        const res2 = await fetch("https://swapi.tech/api12/people/2/");
        const data2 = await res2.json();
        console.log(data2);
    }catch(e){
        console.log("Error!",e);
    }
};
load();