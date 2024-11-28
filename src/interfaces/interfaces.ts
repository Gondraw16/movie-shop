import { FormData } from '../types/types';

export interface ValidInput {
    (initialForm: FormData, e: Event):boolean;
}

export interface IsEmpty {
    (reference: HTMLDivElement, label: HTMLLabelElement, input: HTMLInputElement):boolean;
}

export interface IsMailValid {
    (reference: HTMLDivElement, label: HTMLLabelElement, input: HTMLInputElement):boolean
}

export interface GenerateAlert {
    (reference: HTMLElement | null, message: string, type: string):void
}

export interface ClearAlert {
    (reference: HTMLElement | null, classList:string):void
}

export interface HandleSubmit {
    (initialForm: FormData, e: Event, type:string):Promise<void>
}

export interface FuncFormData {
    (): FormData | null;
  }

export interface FuncVoid {
    ():void;
}

export interface AddNewUser {
    (body: FormData): Promise<void>
}

export interface LoginUser {
    (data: FormData): Promise<FormData | undefined>
}

export interface IsFormValid {
    (form:FormData): boolean
}