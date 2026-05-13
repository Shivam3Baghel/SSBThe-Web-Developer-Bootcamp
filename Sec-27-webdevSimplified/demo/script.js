let p0=new Promise((resolve,reject)=>{
    let i=0;
    if(i===0){
        resolve("Success");
    }else{
        reject("failure");
    }
});

p0.then((msg)=>{
    console.log("inside then, msg="+msg);
}).catch((msg)=>{
    console.log("inside catch, msg="+msg);
});

let p1=new Promise((resolve,reject)=>{
    let i=1;
    if(i===0){
        resolve("Success");
    }else{
        reject("failure");
    }
});

p1.then((msg)=>{
    console.log("inside then, msg="+msg);
}).catch((msg)=>{
    console.log("inside catch, msg="+msg);
});