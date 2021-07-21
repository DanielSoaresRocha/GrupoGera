import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { FeaturesRoutingModule } from './features-routing.module'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule
  ]
})
export class FeaturesModule { }
