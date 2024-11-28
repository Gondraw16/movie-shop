import { FuncVoid, FuncFormData } from '../interfaces/interfaces';
import { FormData } from '../types/types';

export const rememberUser:FuncFormData = ():FormData|null => {

    const user:string|null = localStorage.getItem('user');
    const parseUser:FormData|null = user ? JSON.parse(user) : null;

    return parseUser;

}

export const loggedUser:FuncFormData = ():FormData|null => {

    const logged:string|null = localStorage.getItem('logged');
    const parseUser:FormData|null = logged ? JSON.parse(logged) : null;

    return parseUser;

}