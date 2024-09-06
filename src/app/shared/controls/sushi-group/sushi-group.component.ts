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

  getErrorMsg(key: string) {
    const asd:any = this.validatorsService.validations;
    return asd[key].message;
  }
  
  
}
