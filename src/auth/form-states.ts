import { FormData } from '../types/types';

export const signupForm:FormData = {
    id: Date.now().toString(),
    name: '',
    username: '',
    email: '',
    password: '',
    birthdate: '',
    sex: ''
}

export const loginForm:FormData = {
    username: '',
    email: '',
    password: '',
}