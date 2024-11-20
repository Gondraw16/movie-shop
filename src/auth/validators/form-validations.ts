import { addNewUser } from '../../API/Api.js';
import { ClearAlert, GenerateAlert, HandleSubmit, IsEmpty, IsMailValid, ValidInput } from '../../interfaces/interfaces.js';
import { FormData } from '../../types/types';

const emailRegex:RegExp =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const validInput:ValidInput = (initialForm:FormData, e:Event):boolean => {

    const target:HTMLInputElement = e.target as HTMLInputElement;
    const reference:HTMLDivElement = target.parentElement as HTMLDivElement;
    const label:HTMLLabelElement = target?.parentElement?.children[1] as HTMLLabelElement;

    const button:HTMLButtonElement = document.querySelector('button[type="submit"]') as HTMLButtonElement;

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

    if(input.value.trim() === '') {
        generateAlert(reference, `The ${input.name[0].toUpperCase() + input.name.substring(1) } is empty`, 'error');
        input.classList.remove('field-valid');
        label.classList.remove('field-valid');
        
        return false;
    }

    clearAlert(reference);

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

    clearAlert(reference);

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
    
    if(!reference?.querySelector('.error')) reference?.appendChild(p);

}

const clearAlert:ClearAlert = (reference:HTMLElement|null):void => reference?.querySelector('.error')?.remove();


export const handleSubmit:HandleSubmit = async (initialForm:FormData, e:Event):Promise<void> => {

    e.preventDefault();

    if (isFormValid(initialForm)) {
        console.error('Invalid form. Please complete all fields..');
        return;
    }

    addNewUser(initialForm);

}

const isFormValid = (form: FormData):boolean => Object.values(form).some((value: string): boolean => value.trim() === '');