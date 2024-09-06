import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPasswordComponent } from './input-password.component';
import { SushiGroupModule } from '../../sushi-group/sushi-group.module';

@NgModule({
  declarations: [
    InputPasswordComponent
  ],
  imports: [
    CommonModule,
    SushiGroupModule
  ],
  exports:[
    InputPasswordComponent
  ]
})
export class InputPasswordModule { }
