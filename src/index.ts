import { onFocus } from './cart/helpers/onFocus.js';
import { tools } from './components/tools.js';
import { FuncVoid } from './interfaces/interfaces.js';



document.addEventListener('DOMContentLoaded', ():void => {
    tools();
    addEventListener();
});

const addEventListener:FuncVoid = ():void => {
    document.addEventListener('click', onFocus);   
}