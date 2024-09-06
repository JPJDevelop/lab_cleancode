import { Component, inject, InjectFlags, Input, OnInit} from '@angular/core';
import { ControlContainer, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  template: '',
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, InjectFlags.SkipSelf)
    }
  ]
})

export abstract class GenericControl {

  @Input() controlName!: string;  
  @Input() value!: any;

  get parentFormGroup() { return this.parentContainer.control as FormGroup }

  constructor(public parentContainer: ControlContainer) { }

}
