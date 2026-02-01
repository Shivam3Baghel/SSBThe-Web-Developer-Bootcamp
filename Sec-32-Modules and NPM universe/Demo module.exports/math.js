const add=(x,y)=>x+y;
const pi=3.14;
const square=x=>x*x;
module.exports.a="hello";
module.exports.p=pi;
module.exports.square=square;
//whatever gets stored in module.exports(variable(may be object))
//  is put inside the variable that require the module which contains module.exports
//module.exports is an object