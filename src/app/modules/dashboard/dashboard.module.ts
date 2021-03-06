import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { UnidadeModalComponent } from './unidades-consumidoras/unidade-modal/unidade-modal.component';
import { SharedModule } from '@src/app/shared';
import { UnidadesConsumidorasComponent } from './unidades-consumidoras/unidades-consumidoras.component';
import { FaturasComponent } from './faturas/faturas.component';
import { FaturaModalComponent } from './faturas/fatura-modal/fatura-modal.component';
import { GraficoComponent } from './inicio/grafico/grafico.component';

@NgModule({
  declarations: [
    InicioComponent,
    UnidadeModalComponent,
    UnidadesConsumidorasComponent,
    FaturasComponent,
    FaturaModalComponent,
    GraficoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
