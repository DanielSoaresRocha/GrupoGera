import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaturasComponent } from './faturas/faturas.component';
import { InicioComponent } from './inicio';
import { UnidadesConsumidorasComponent } from './unidades-consumidoras/unidades-consumidoras.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: InicioComponent
  },
  {
    path: 'unidades',
    component: UnidadesConsumidorasComponent
  },
  {
    path: 'faturas',
    component: FaturasComponent
  },
  {
    path: 'faturas/:idUnidade',
    component: FaturasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}