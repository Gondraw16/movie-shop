import { rememberUser } from '../helpers/checkAuthentication.js';
import { FuncVoid } from '../interfaces/interfaces.js';
import { FormData } from '../types/types.js';
import { button } from './components/button.js';
import { inputRemember, loginInputs } from './components/inputs.js';
import { loginForm } from './form-states.js';

export const remember:FuncVoid = ():void => {

    const userData:FormData|null = rememberUser();

    if(userData !== null) {

        loginInputs.forEach( (input:HTMLInputElement):void => {

            const inputValue:string|undefined = userData[input.name as keyof FormData];
            const label:HTMLLabelElement = input?.parentElement?.children[1] as HTMLLabelElement;

            if(inputValue) {
                input.value = inputValue;
                loginForm[input.name as keyof FormData] = inputValue;
                button.disabled = false;
                input.classList.add('field-valid');
                label.classList.add('field-valid');
                if(inputRemember) {
                    inputRemember.checked = true;
                }
            }

        })
    }

}