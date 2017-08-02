
import {add} from './add';
import gif from './niko.png'
import css from './test.css'

let [myGif,fucker] = [new Image(),new Image()];
 myGif.src = gif;
document.body.appendChild(myGif);
let div = document.createElement('div');
div.id = 'head';
document.body.appendChild(div);
console.log(add(2,3));
console.log('hello,this world!');