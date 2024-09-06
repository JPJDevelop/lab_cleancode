import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPedidosComponent } from './listado-pedidos/listado-pedidos.component';
import { NuevoPedidoComponent } from './nuevo-pedido/nuevo-pedido.component';
import { PedidosModule } from './pedidos.module';
import { PedidosComponent } from './pedidos.component';

const routes: Routes = [
  {
    path: '',
    component: PedidosComponent,
    children: [
      {
        path: '',
        component: ListadoPedidosComponent
      },
      {
        path: 'nuevo-pedido',
        component: NuevoPedidoComponent
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRoutingModule { }
