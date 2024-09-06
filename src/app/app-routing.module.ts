import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/no-auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [NoAuthGuard],
    loadChildren: () => import('./public/public-app.module').then(m => m.PublicAppModule) // Rutas públicas por defecto
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./private/private-app.module').then(m => m.PrivateAppModule) // Rutas privadas
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
