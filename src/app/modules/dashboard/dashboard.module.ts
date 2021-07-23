import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { UnidadeModalComponent } from './inicio/unidade-modal/unidade-modal.component'
import { SharedModule } from '@src/app/shared';

@NgModule({
  declarations: [
    InicioComponent,
    UnidadeModalComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
