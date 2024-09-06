import { Component, inject, InjectFlags, Input, OnDestroy, OnInit} from '@angular/core';
import { ControlContainer, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/services/validators.service';

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
    return this.parentFormGroup.get(this.controlName)?.errors;
  }

  get controlErrorKeys(): string[] {
    const errors = this.controlErrors;
    return errors ? Object.keys(errors) : [];
  }

  ngOnDestroy(): void {
    this.parentFormGroup.removeControl(this.controlName);
  }

}
