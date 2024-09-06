import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicAppComponent } from './public-app.component';
import { PublicAppRoutingModule } from './public-app-routing.module';



@NgModule({
  declarations: [
    PublicAppComponent
  ],
  imports: [
    CommonModule,
    PublicAppRoutingModule
  ]
})
export class PublicAppModule { }
