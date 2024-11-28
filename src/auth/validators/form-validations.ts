import { addNewUser, loginAsUser } from '../../API/Api.js';
import { ClearAlert, GenerateAlert, HandleSubmit, IsEmpty, IsFormValid, IsMailValid, ValidInput } from '../../interfaces/interfaces.js';
import { emailRegex } from './Regex.js';
import { FormData } from '../../types/types';
import { inputRemember } from '../components/inputs.js';
import { button } from '../components/button.js';

export const validInput:ValidInput = (initialForm:FormData, e:Event):boolean => {

    const target:HTMLInputElement = e.target as HTMLInputElement;
    const reference:HTMLDivElement = target.parentElement as HTMLDivElement;
    const label:HTMLLabelElement = target?.parentElement?.children[1] as HTMLLabelElement;

    if(target.name === 'email') {
        if(!isMailValid(reference, label, target)) {
            initialForm.email = '';
            button.disabled = true;
            return false;
        }
    };   

    initialForm[target?.name as keyof FormData] = target?.value;


    if(!Object.values(initialForm).includes('')) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }

    return isEmpty(reference, label, target);
    
} 

export const isEmpty:IsEmpty = (reference:HTMLDivElement, label:HTMLLabelElement, input:HTMLInputElement):boolean => {

    clearAlert(reference, 'error');

    if(input.value.trim() === '') {
        generateAlert(reference, `The ${input.name[0].toUpperCase() + input.name.substring(1) } is empty`, 'error');
        input.classList.remove('field-valid');
        label.classList.remove('field-valid');
        
        return false;
    }

    input.classList.add('field-valid');
    label.classList.add('field-valid');

    return true;

}

export const isMailValid:IsMailValid = (reference:HTMLDivElement, label:HTMLLabelElement, input:HTMLInputElement):boolean => {

    const isMail:boolean = emailRegex.test(input.value); 

    if(input.value === '' ) {
        generateAlert(reference, `The ${input.name[0].toUpperCase() + input.name.substring(1) } is empty`, 'error');
        input.classList.remove('field-valid');
        label.classList.remove('field-valid');
        return false;
    }

    clearAlert(reference, 'error');

    input.classList.add('field-valid');
    label.classList.add('field-valid');

    if(!isMail) {
        generateAlert(reference, `The ${input.name[0].toUpperCase() + input.name.substring(1) } not is valid`, 'error');
        return false;
    }

    return isMail;
};

const generateAlert:GenerateAlert = (reference:HTMLElement|null, message:string, type:string):void => {

    const p:HTMLParagraphElement = document.createElement('p');
    p.textContent = message;
    p.classList.add(type);
    
    if(!reference?.querySelector(type)) reference?.appendChild(p);

}

const clearAlert:ClearAlert = (reference:HTMLElement|null, classList:string):void => reference?.querySelector(`.${classList}`)?.remove();


export const handleSubmit:HandleSubmit = async (initialForm:FormData, e:Event, type):Promise<void> => {

    e.preventDefault();

    const target:HTMLFormElement = e.target as HTMLFormElement;

    if (isFormValid(initialForm)) {
        console.error('Invalid form. Please complete all fields..');
        return;
    }

    switch (type) {

        case 'signup':

            addNewUser(initialForm);        

        break;

        case 'login':

            loginAsUser(initialForm)
            
                .then((res:FormData|undefined) => {
                    
                    if(res) {

                        delete res.password;

                        localStorage.setItem('logged', JSON.stringify(res));

                        if(inputRemember?.checked) {
                            localStorage.setItem('user', JSON.stringify(initialForm));
                        } else {
                            localStorage.removeItem('user');
                        }

                        window.location.href= `../../index.html`;

                    } else {

                        target.reset();

                        clearAlert(target, 'error-alert');
                        generateAlert(target.querySelector('.main-container-form'), 'The user you are trying to enter is not registered', 'error-alert');

                    }

                })
                .catch(error => console.log(error))
       break;
        
    }


}

const isFormValid:IsFormValid = (form: FormData):boolean => Object.values(form).some((value: string): boolean => value.trim() === '');