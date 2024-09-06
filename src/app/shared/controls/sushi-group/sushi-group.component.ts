import { Component, inject, InjectFlags, Input, OnInit} from '@angular/core';
import { ControlContainer, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { GenericControl } from '../generic-control';
import { ValidatorsService } from 'src/app/services/validators.service';

@Component({
  selector: 'app-sushi-group',
  templateUrl: './sushi-group.component.html',
  styleUrls: ['./sushi-group.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, InjectFlags.SkipSelf)
    }
  ]
})

export class SushiGroupComponent extends GenericControl implements OnInit {

  @Input() validators: ValidatorFn[] = [];

  constructor(
    controlContainer: ControlContainer,
    public validatorService: ValidatorsService 
  ){super(controlContainer)}

  get controlErrors(){
    return this.parentFormGroup.get(this.controlName)?.errors;
  }

  get controlErrorKeys(): string[] {
    const errors = this.controlErrors;
    return errors ? Object.keys(errors) : [];
  }

  ngOnInit(): void {
    console.log('AGREGA CONTROL');
    this.parentFormGroup.addControl(this.controlName, new FormControl(this.value, this.validators))
  }

  ngOnDestroy(){
    console.log('QUITA CONTROL');
    this.parentFormGroup.removeControl(this.controlName)
  }

}
