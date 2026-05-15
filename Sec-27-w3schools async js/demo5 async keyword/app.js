async function myF(){
    return "Hello";
}
console.log(myF());
function myF0(){
    return Promise.resolve("Hello");
}
console.log(myF0());
//the result is handled with then() because it is a promise
myF().then(
    function(value){/*code if successful*/},
    function(value){/*code if some error*/}
);
myF().then(
    function(value){console.log(value);},
    function(value){console.log(value);}
);
//Or simpler, since you expect a normal value (a normal response, not an error)
myF().then(
    function(value){console.log(value);}
);