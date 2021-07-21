import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { 
    path: "", 
    redirectTo: "/auth", 
    pathMatch: "full" },
  { 
    path: "auth",
    loadChildren: () => import("./modules/auth").then(m => m.AuthModule) 
  },
  { 
    path: "app", 
    loadChildren: () => import("./modules/features.module").then(m => m.FeaturesModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
