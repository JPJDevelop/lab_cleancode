import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicAppComponent } from './public-app.component';

const routes: Routes = [
  {
    path: '',
    component: PublicAppComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicAppRoutingModule { }
