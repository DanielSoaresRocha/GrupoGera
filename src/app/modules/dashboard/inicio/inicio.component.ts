import { Component, OnInit } from '@angular/core';
import { Fatura } from '@src/app/core/models/fatura';
import { UnidadeConsumidora } from '@src/app/core/models/unidade-consumidora.model';

// Services
import { FaturaService, UnidadeConsumidoraService } from '@src/app/shared/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  unidades$: Observable<UnidadeConsumidora[]>;
  faturas$: Observable<Fatura[]>;
  
  faturasVencidas = 0;

  constructor(
    private unidadeConsumidoraService: UnidadeConsumidoraService,
    private faturaService: FaturaService
    ) { }

  ngOnInit(): void {
    this.unidades$ = this.unidadeConsumidoraService.getAll();
    this.faturas$ = this.faturaService.getAll();

    this.countFaturasVencidas();
  }

  countFaturasVencidas(){
    this.faturas$.subscribe(
    faturas => {
      faturas.forEach(fatura => {
        let dataFatura: any = fatura.data_de_vencimento.split('/');
        dataFatura = dataFatura.map(data => parseInt(data));
        dataFatura = new Date(dataFatura[2], dataFatura[1], dataFatura[0]);

        if(dataFatura < new Date())
          this.faturasVencidas++;
      });
    });
  }

}
