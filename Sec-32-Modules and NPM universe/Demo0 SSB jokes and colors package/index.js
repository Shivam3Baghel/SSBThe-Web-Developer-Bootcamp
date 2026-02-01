var giveMeAJoke = require('give-me-a-joke');
giveMeAJoke.getRandomDadJoke (function (joke) {
    console.log(joke);
});
var colors = require('colors');
 
console.log(colors.green('hello')); // outputs green text
console.log(colors.red.underline('i like cake and pies')) // outputs red underlined text
console.log(colors.inverse('inverse the color')); // inverses the color
console.log(colors.rainbow('OMG Rainbows!')); // rainbow
console.log(colors.trap('Run the trap')); // Drops the bass
//cowsay globaly -g ,when we want to install apackage globally so it is present everywhere in th system