import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenciesRoutingModule } from './agencies-routing.module';
import { ListAgenciesComponent } from './pages/list-agencies/list-agencies.component';
import { ComponentsModule } from '../shared/components/components.module';
import { EditAgencyComponent } from './pages/edit-agency/edit-agency.component';
import { AgenciesComponentsModule } from './components/components.module';


@NgModule({
  declarations: [ListAgenciesComponent, EditAgencyComponent],
  imports: [
    CommonModule,
    AgenciesRoutingModule,
    AgenciesComponentsModule,
    ComponentsModule
  ],
})
export class AgenciesModule { }
