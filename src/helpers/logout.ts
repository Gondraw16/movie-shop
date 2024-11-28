import { FuncVoid } from '../interfaces/interfaces';

export const logout:FuncVoid = ():void => {

    localStorage.removeItem('logged');
    window.location.href = 'auth/pages/login.html';

}