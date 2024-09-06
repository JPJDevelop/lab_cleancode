import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CajaComponent } from './caja.component';
import { ListadoMovimientosComponent } from './listado-movimientos/listado-movimientos.component';
import { TransferenciasComponent } from './transferencias/transferencias.component';
import { CajaRoutingModule } from './caja-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { InputPasswordModule } from "../../../shared/controls/inputs/input-password/input-password.module";
import { InputGenericModule } from 'src/app/shared/controls/input-generic/input-generic.module';

@NgModule({
  declarations: [
    CajaComponent,
    ListadoMovimientosComponent,
    TransferenciasComponent
  ],
  imports: [
    CommonModule,
    CajaRoutingModule,
    ReactiveFormsModule,
    InputGenericModule,
    InputPasswordModule
]
})
export class CajaModule { }
