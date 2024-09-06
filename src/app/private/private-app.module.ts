import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateAppComponent } from './private-app.component';
import { PrivateAppRoutingModule } from './private-app-routing.module';



@NgModule({
  declarations: [
    PrivateAppComponent
  ],
  imports: [
    CommonModule,
    PrivateAppRoutingModule
  ]
})
export class PrivateAppModule { }
