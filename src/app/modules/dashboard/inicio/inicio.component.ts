import { Component, OnInit } from '@angular/core';
import { Fatura } from '@src/app/core/models/fatura';
import { UnidadeConsumidora } from '@src/app/core/models/unidade-consumidora.model';

// Services
import { FaturaService, UnidadeConsumidoraService } from '@src/app/shared/services';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  unidades: UnidadeConsumidora[] = [];
  faturas: Fatura[] = [];

  constructor(
    private unidadeConsumidoraService: UnidadeConsumidoraService,
    private faturaService: FaturaService
    ) { }

  ngOnInit(): void {
    this.getAllUnidades();

    this.faturaService.getAll().subscribe(
      faturas => {
        this.faturas = faturas.map((fatura: Fatura) => {
            fatura.createdAt = new Date(fatura.createdAt).toLocaleDateString('pt-br');
            fatura.updatedAt = new Date(fatura.updatedAt).toLocaleDateString('pt-br');
            return fatura;
          })
        console.log(faturas)
      }
    )
  }

  private getAllUnidades(){
    this.unidadeConsumidoraService.getAll()
      .subscribe(
        unidades => {
          this.unidades = unidades.map((unidade: UnidadeConsumidora) => {
            unidade.createdAt = new Date(unidade.createdAt).toLocaleDateString('pt-br');
            unidade.updatedAt = new Date(unidade.updatedAt).toLocaleDateString('pt-br');
            return unidade;
          })
      });
  }

  formatValue(value: number): string{
    return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }

}
