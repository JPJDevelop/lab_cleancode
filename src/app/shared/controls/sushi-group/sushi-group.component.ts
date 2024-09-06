import { Component, inject, InjectFlags, Input, OnInit } from '@angular/core';
import { ControlContainer, ValidatorFn } from '@angular/forms';
import { GenericControl } from '../generic-control';

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

export class SushiGroupComponent extends GenericControl {

  getErrorMsg(key:string): string | null {
    const key = this.controlErrorKeys[0];
    const validation = this.validatorsService.validations[key];
    if (validation && typeof validation !== 'function' && typeof validation.message === 'string') {
      return validation.message;
    }
    return null;
  }
  
}
