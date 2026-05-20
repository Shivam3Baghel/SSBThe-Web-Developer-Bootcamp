fetch("https://swapi.tech/api/people/1/")
.then ((res) => {
console.log("RESOLVED!", res);
return res.json();
})
.then((data) => {
console.log(data);
return fetch("https://swapi.tech/api/people/2/");
})
.then((res) => {
console.log("SECOND REQUEST RESOLVED!!!");
return res.json();
})
.then ((data) => {
console.log(data);
})
.catch((e) => {
console.log("ERROR!", e);
});