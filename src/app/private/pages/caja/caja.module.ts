import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CajaComponent } from './caja.component';
import { ListadoMovimientosComponent } from './listado-movimientos/listado-movimientos.component';
import { TransferenciasComponent } from './transferencias/transferencias.component';
import { CajaRoutingModule } from './caja-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { SushiGroupModule } from 'src/app/shared/controls/sushi-group/sushi-group.module';

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
    SushiGroupModule,
    SushiGroupModule
  ]
})
export class CajaModule { }
