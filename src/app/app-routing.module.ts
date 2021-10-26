import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, outlet: 'primary', pathMatch: 'prefix'},
  {path: 'foo', component: HomeComponent, outlet: 'primary', pathMatch: 'full'},
  {path: 'auth', loadChildren: () => import('./views/pages/auth/auth.module').then(m => m.AuthModule)},
  {path: 'admin', loadChildren: () => import('./views/admin/admin.module').then(m => m.AdminModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
