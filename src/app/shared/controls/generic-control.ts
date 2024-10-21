import { Component, inject, InjectFlags, Input, OnDestroy, OnInit} from '@angular/core';
import { ControlContainer, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/services/validators.service';

export const GENERIC_CONTROL_VIEW_PROVIDERS = [
  {
    provide: ControlContainer,
    useFactory: () => inject(ControlContainer, InjectFlags.SkipSelf)
  }
];

@Component({
  template: ''  
})

export abstract class GenericControl implements OnInit, OnDestroy {

  @Input() controlName!: string;  
  @Input() value!: any;
  @Input() validators?: ValidatorFn[] = [];

  get parentFormGroup() { return this.parentContainer.control as FormGroup }

  constructor(private parentContainer: ControlContainer, public validatorsService: ValidatorsService) { }

  ngOnInit(): void {
    this.parentFormGroup.addControl(this.controlName, new FormControl(this.value, this.validators));
  }

  get controlErrors(){    
    const errors = this.parentFormGroup.get(this.controlName)?.errors;
    return this.validatorsService.getErrorMessage(errors);
  }

  get showError(): boolean | undefined {
    const control = this.parentFormGroup.get(this.controlName);
    return control?.invalid && (control.touched || control.dirty); 
  }

  ngOnDestroy(): void {
    this.parentFormGroup.removeControl(this.controlName);
  }

}
