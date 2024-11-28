import { handleSubmit, validInput } from './validators/form-validations.js';
import { logged } from './logged.js';
import { remember } from './remember.js';
import { loginForm, signupForm } from './form-states.js';
import { login, signup } from './components/forms.js';
import { loginInputs, signupInputs } from './components/inputs.js';
import { FuncVoid } from '../interfaces/interfaces.js';

document.addEventListener('DOMContentLoaded', ():void => {
    logged();
    addEventListeners();
    remember();
});

const addEventListeners:FuncVoid = ():void => {

    if(signup) {

        signupInputs.forEach( (input:HTMLInputElement):void =>  {
            if(input.type === 'radio' || input.type === 'date') input.addEventListener('change', (e:Event):boolean => validInput(signupForm, e));
            if(input.type !== 'radio' && input.type !== 'date') input.addEventListener('keyup', (e:Event):boolean => validInput(signupForm, e));
        });

        signup?.addEventListener('submit', (e):Promise<void> => handleSubmit(signupForm, e, 'signup'));   

    }

    if(login) {

        loginInputs.forEach((input:HTMLInputElement):void => {
            input.addEventListener('keyup', (e:Event):boolean => validInput(loginForm, e));
        });

        login?.addEventListener('submit', (e):Promise<void> => handleSubmit(loginForm, e, 'login'));
    }
    
}