import { AddNewUser, LoginUser } from '../interfaces/interfaces';
import { FormData } from '../types/types';

const url:string = 'http://localhost:3000/users';


export const addNewUser:AddNewUser = async (body:FormData):Promise<void> => {
    
    try {
        
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        });

        window.location.href = `login.html?id="${body.id}"&valid="ok"`;

    } catch (error) {
       console.log(error);
    }

}

export const loginAsUser:LoginUser = async (data:FormData):Promise<FormData|undefined> => {

    const { email, password } = data;

    try {

        const response:Response = await fetch(url);
        const data:FormData[] = await response.json();

        const user = data.find( (user:FormData) => user.email === email &&  user.password === password); 

        return user;

    }  catch(error) {
        console.log(error);
    }

} 