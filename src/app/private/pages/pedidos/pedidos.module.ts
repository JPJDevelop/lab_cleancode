import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosComponent } from './pedidos.component';
import { ListadoPedidosComponent } from './listado-pedidos/listado-pedidos.component';
import { NuevoPedidoComponent } from './nuevo-pedido/nuevo-pedido.component';
import { PedidosRoutingModule } from './pedidos-routing.module';



@NgModule({
  declarations: [
    PedidosComponent,
    ListadoPedidosComponent,
    NuevoPedidoComponent
  ],
  imports: [
    CommonModule,
    PedidosRoutingModule
  ]
})
export class PedidosModule { }
