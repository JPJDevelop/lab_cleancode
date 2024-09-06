import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateAppComponent } from './private-app.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateAppComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'caja',
        loadChildren: () => import('./pages/caja/caja.module').then(m => m.CajaModule)
      },
      {
        path: 'pedidos',
        loadChildren: () => import('./pages/pedidos/pedidos.module').then(m => m.PedidosModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateAppRoutingModule { }
