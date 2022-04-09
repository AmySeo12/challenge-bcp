import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditAgencyComponent } from './pages/edit-agency/edit-agency.component';
import { ListAgenciesComponent } from './pages/list-agencies/list-agencies.component';

const routes: Routes = [
  {
    path: '',
    component: ListAgenciesComponent
  },
  {
    path: 'editar/:id',
    component: EditAgencyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgenciesRoutingModule { }
