import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPasswordComponent } from './input-password.component';
import { InputGenericModule } from '../../input-generic/input-generic.module';

@NgModule({
  declarations: [
    InputPasswordComponent
  ],
  imports: [
    CommonModule,
    InputGenericModule
  ],
  exports:[
    InputPasswordComponent
  ]
})
export class InputPasswordModule { }
