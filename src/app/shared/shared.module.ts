import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { LayoutComponent, NavbarComponent, SidebarComponent} from './components/layout';

// Modules
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Services
import { UnidadeConsumidoraService, FaturaService } from '@src/app/shared/services'
import { InputDirective } from '../core/directives/input.directive';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    SidebarComponent,
    InputDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    UnidadeConsumidoraService,
    FaturaService
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    InputDirective
  ]
})
export class SharedModule { }
