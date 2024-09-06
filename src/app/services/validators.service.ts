import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

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
    // Puedes agregar más validadores aquí
  };

  /*getErrorMessage(errorKey: string, length?: number): string {
    const validation = this.validations[errorKey];
    if (typeof validation === 'function') {
      return (validation as any)(length)?.message || 'Error desconocido';
    }
    return validation?.message || 'Error desconocido';
  }*/

  constructor() { }
}
