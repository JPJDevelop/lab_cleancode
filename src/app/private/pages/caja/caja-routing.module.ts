import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoMovimientosComponent } from './listado-movimientos/listado-movimientos.component';
import { TransferenciasComponent } from './transferencias/transferencias.component';
import { CajaComponent } from './caja.component';

const routes: Routes = [
  {
    path: '',
    component: CajaComponent,
    children: [
      {
        path: '',
        component: ListadoMovimientosComponent
      },
      {
        path: 'transferencias',
        component: TransferenciasComponent
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CajaRoutingModule { }
