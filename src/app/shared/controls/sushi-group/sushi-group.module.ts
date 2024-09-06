import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SushiGroupComponent } from './sushi-group.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SushiGroupComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports:[
    SushiGroupComponent
  ]
})
export class SushiGroupModule { }
