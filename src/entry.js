const css = require('./test.css');
const gif = require('./niko.png');

import {add} from './add';

let [myGif,fucker] = [new Image(),new Image()];
 myGif.src = gif;
document.body.appendChild(myGif);
console.log(add(2,3));
console.log('hello,this world!');