import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputGenericComponent } from './input-generic.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModulesModule } from 'src/app/directivas/common-modules.module';

@NgModule({
  declarations: [
    InputGenericComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModulesModule
  ],
  exports:[
    InputGenericComponent
  ]
})
export class InputGenericModule { }
