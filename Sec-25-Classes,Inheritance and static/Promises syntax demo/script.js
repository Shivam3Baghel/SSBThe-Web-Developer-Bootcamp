let myP=new Promise(function(myResolve,myReject){
    myResolve();
});
myP.then()
    function(value){console.log(1);},
    function(error){console.log(2);}
);