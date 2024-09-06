import { Injectable } from '@angular/core';
import { ValidatorFn, Validators } from '@angular/forms';
import { CustomValidators } from '../utils/validators/CustomValidators';


@Injectable({
  providedIn: 'root'
})

export class ValidatorsService {
  validations = {
    required: {
      validator: Validators.required,
      message: 'Este campo es requerido'
    },
    minLength: (length: number) => ({
      validator: Validators.minLength(length),
      message: `El campo debe tener al menos ${length} caracteres`
    }),
    password: {
      validator: CustomValidators.passwordValidator(),
      message: 'La contraseña debe tener al menos 8 caracteres e incluir mayúsculas y números.'
    }
  };

  // passwordValidator(): ValidatorFn {
  //   return (control) => {
  //     const pattern = new RegExp('(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$');
  //     return pattern.test(control.value) ? null : { password: true };
  //   };
  // }

  /*getErrorMessage(errorKey: string, length?: number): string {
    const validation = this.validations[errorKey];
    if (typeof validation === 'function') {
      return (validation as any)(length)?.message || 'Error desconocido';
    }
    return validation?.message || 'Error desconocido';
  }*/

  constructor() { }
}
