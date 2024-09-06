import { ValidationErrors, Validators } from '@angular/forms';
import { CustomValidators } from '../utils/validators/CustomValidators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ValidatorsService {
  validations = {

    required: {
      validator: Validators.required,
      message: 'Este campo es requerido'
    },

    minlength: (length: number) => ({
      validator: Validators.minLength(length),
      message: `El campo debe tener al menos ${length} caracteres`
    }),

    password: {
      validator: CustomValidators.passwordValidator(),
      message: 'La contraseña debe tener al menos 8 caracteres e incluir mayúsculas y números.'
    }

  };

  getErrorMessage(errors: ValidationErrors | null | undefined): string | null {
    if (!errors) return null;

    const keyErrors: string[] = Object.keys(errors);
    if (keyErrors.length === 0) return null;

    const key = keyErrors[0] as keyof ValidatorsService['validations'];
    const validator = this.validations[key];

    if (typeof validator === 'function') {
      const length = errors['minlength']?.requiredLength || 0;
      const validationResult = validator(length);
      return validationResult.message;
    } else {
      return validator.message;
    }
  }

}
