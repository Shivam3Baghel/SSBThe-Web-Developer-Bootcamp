const request=fakeRequestPromise("yelp.com/api/coffee");
request
.then(()=>{
    console.log("promise resolved");
    console.log("it worked.");
})
.catch(()=>{
    console.log("promise rejected!");
    console.log("oh no error.");
});