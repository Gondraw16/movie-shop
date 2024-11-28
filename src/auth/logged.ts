import { loggedUser } from '../helpers/checkAuthentication.js';
import { FuncVoid } from '../interfaces/interfaces.js';


export const logged:FuncVoid = ():void => {

        const logged =  loggedUser();

        if(logged !== null) window.location.href = '../../index.html';

}



