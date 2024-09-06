import { Component, inject, InjectFlags } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { GenericControl } from '../generic-control';

@Component({
  selector: 'input-generic',
  templateUrl: './input-generic.component.html',
  styleUrls: ['./input-generic.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, InjectFlags.SkipSelf)
    }
  ]
})

export class InputGenericComponent extends GenericControl {
  
  
}
