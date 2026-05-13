let step1=()=>{
    return Promise.resolve("A");
};
let step2=(value)=>{
    return Promise.resolve(value+"B");
};
let step3=(value)=>{
    return Promise.resolve(value+"C");
}
step1()
.then((value)=>{
    return step2(value);
})
.then((value)=>{
    return step3(value);
})
.then((value)=>{
    console.log(value);
});//ABC