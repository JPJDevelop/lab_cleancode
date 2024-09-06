import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {

  static passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const pattern = new RegExp('(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$');
      return pattern.test(control.value) ? null : { password: true };
    };
  }

  static validateForm(form: FormGroup) {
    if (!form?.valid) {      
        form?.markAllAsTouched()          
    }
  }
}
