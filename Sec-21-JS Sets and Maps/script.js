//pass an array to the new Set() constructor
const letters1 = new Set(["a","b","c"]);
//create an empty set and add values
const letters2=new Set();
letters2.add("d");
letters2.add("e");
letters2.add("f");
console.log(letters1,letters2);
// Passing an Array to new Map()
const fruits1=new Map([["apples", 500],
  ["bananas", 300],
  ["oranges", 200]]);
//create an empty map and set map values
const fruits2 = new Map();
fruits2.set("Chanakya Neeti.", 600);
fruits2.set("The Power of Positive Thinking.", 400);
fruits2.set("Memory,How to develop train and use it.", 500);
console.log(fruits1,fruits2);
for(const x of letters1){
    console.log(x);
}
for(const x of letters2){
    console.log(x);
}