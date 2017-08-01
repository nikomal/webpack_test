const add = require('./add').add;
const css = require('./test.css');

const gif = require('./niko.png');

let [myGif,fucker] = [new Image(),new Image()];
 myGif.src = gif;
document.body.appendChild(myGif);
console.log(add(2,3));
console.log('hello,this world!');