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
    (reference: HTMLElement | null):void
}

export interface HandleSubmit {
    (initialForm: FormData, e: Event):Promise<void>
}