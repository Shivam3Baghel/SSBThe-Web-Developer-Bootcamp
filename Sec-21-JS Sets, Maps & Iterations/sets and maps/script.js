//pass an array to the new Set() constructor-
const letters1 = new Set(["a","b","c"]);
//create an empty set and add values-
const letters2=new Set();
letters2.add("d");
letters2.add("e");
letters2.add("f");
console.log(letters1,letters2);//Set(3) { 'a', 'b', 'c' } Set(3) { 'd', 'e', 'f' }
//listing the elements of a set-
let text="";
for(let x of letters1){
    text+=x;
}
console.log(text);
//size of a set
console.log(letters1.size)//3
//.has() check whether a value is present or not
console.log(letters1.has("a"));//true
console.log(letters1.has("d"));//false
//The forEach() method invokes a function for each Set element
text="";
letters1.forEach((x)=>{
    text+=x;
})
console.log(text);//abc
//The keys() method returns an Iterator object with the values in a Set
//A Set has no keys, so keys() returns the same as values().
//This makes Sets compatible with Maps.
text="";
for(let x of letters1.keys()){
    text+=x;
}
console.log(text);
//The values() method returns an Iterator object with the values in a Set:
text="";
for(let x of letters1.values()){
    text+=x;
}
console.log(text);
//The entries() method returns an Iterator with [value,value] pairs from a Set.
//The entries() method is supposed to return a [key,value] pair from an object.
//A Set has no keys, so the entries() method returns [value,value].
//This makes Sets compatible with Maps.
let myIterator=letters1.entries();
text="";
for(let x of myIterator){
    text+=x+".";
}
console.log(text);

//-----------------------------------------------------------------------------------
// Passing an Array of arrays to new Map()
const fruits1=new Map([["apples", 500],
  ["bananas", 300],
  ["oranges", 200]]);
//create an empty map and set map values
const fruits2 = new Map();
fruits2.set("Chanakya Neeti.", 600);
fruits2.set("The Power of Positive Thinking.", 400);
fruits2.set("Memory,How to develop train and use it.", 500);
console.log(fruits1,fruits2);
let str="";
for(const x of letters1){
    str+=x;
}
console.log(str);
str=""
for(const x of letters2){
    str+=x;
}
console.log(str);