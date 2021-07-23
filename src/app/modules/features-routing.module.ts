import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../shared/components/layout'

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children:[
      { 
        path: "",
        loadChildren: () => import("./dashboard/dashboard.module").then(m => m.DashboardModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
