import { FormData } from '../types/types';

const url:string = 'http://localhost:3000/users';


export const addNewUser = async (body:FormData):Promise<void> => {
    
    try {
        
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        window.location.href = `loginForm.html?id="${body.id}"&valid="ok"`;

    } catch (error) {
       console.log(error);
    }

}