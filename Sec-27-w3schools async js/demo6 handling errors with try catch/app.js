let fail=()=>{
    return Promise.reject("Failed");
};

async function run(){
    try{
        let value=await fail();
        console.log(value);
    }catch(e){console.log(e);

    }
}
run();
//Errors from awaited promises are caught like normal errors