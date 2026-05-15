let p=new Promise((myResolve,myReject)=>{
    setTimeout(()=>{myResolve("I love u !!!");},3000);});
p.then((value)=>{
    console.log(value);
});