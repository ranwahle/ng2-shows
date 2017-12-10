import { ValidatorFn, AbstractControl } from '@angular/forms';

export function TextRangeValidator(min: number, max: number): ValidatorFn {

    return (control: AbstractControl) => {
        const value: string = control.value;

        if (value && value.length >= min && value.length <= max) {
            return null;
        }
        return {

           'textRange': `Input string has to be between ${min} and ${max} characters`
         };
    };
}
