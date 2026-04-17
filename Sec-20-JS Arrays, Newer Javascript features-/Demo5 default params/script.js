//default params
function rollDie1(numSides){
    return Math.floor(Math.random()*numSides)+1;
}
console.log(rollDie1());
console.log(rollDie1());
console.log(rollDie1(2));
console.log(rollDie1(2));
console.log(rollDie1(6));
console.log(rollDie1(10));

function rollDie2(numSides){
    if(numSides===undefined){
        numSides=6;
    }
return Math.floor(Math.random()*numSides)+1;
}
console.log(rollDie2());
console.log(rollDie2());
console.log(rollDie2(2));
console.log(rollDie2(2));
console.log(rollDie2(6));
console.log(rollDie2(10));
//order matters of parameters while calling or excecuting a function
//demo of calling a function by changing the order of the parameters later