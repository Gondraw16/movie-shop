import { signupForm } from './form-states.js';
import { handleSubmit, validInput } from './validators/form-validations.js';

// Forms
const signup:HTMLFormElement|null = document.querySelector('#signup');
const login:HTMLFormElement|null = document.querySelector('#login');


// Inputs
const signupInputs:NodeListOf<HTMLInputElement> = document.querySelectorAll('input');


document.addEventListener('DOMContentLoaded', ():void => {
    addEventListeners();
});

const addEventListeners = (): void => {

    if(signup) {

        signupInputs.forEach( (input:HTMLInputElement):void =>  {
            if(input.type === 'radio' || input.type === 'date') input.addEventListener('change', (e:Event):boolean => validInput(signupForm, e));
            if(input.type !== 'radio' && input.type !== 'date') input.addEventListener('keyup', (e:Event):boolean => validInput(signupForm, e));
        });

        signup?.addEventListener('submit', (e):Promise<void> => handleSubmit(signupForm, e));
        
    }
}