import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'agencias',
    pathMatch: 'full'
  },
  {
    path: 'agencias',
    loadChildren: () => import('./agencies/agencies.module').then(m => m.AgenciesModule)
  },
  {
    path: '**',
    redirectTo: 'agencias'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
