import { Component, OnInit } from '@angular/core';
import { Fatura } from '@src/app/core/models/fatura';
import { UnidadeConsumidora } from '@src/app/core/models/unidade-consumidora.model';

// Services
import { FaturaService, UnidadeConsumidoraService } from '@src/app/shared/services';
import { Observable } from 'rxjs';

interface UnidadesGraphic{
  unidade: string;
  mediaConsumo: number;
  color?: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  unidades$: Observable<UnidadeConsumidora[]>;
  faturas$: Observable<Fatura[]>;

  unidadesConsumo: UnidadesGraphic[] = null;
  consumos: number[] = [];
  maiorConsumo = 0;

  constructor(
    private unidadeConsumidoraService: UnidadeConsumidoraService,
    private faturaService: FaturaService
    ) { }

  ngOnInit(): void {
    this.unidades$ = this.unidadeConsumidoraService.getAll();
    this.faturas$ = this.faturaService.getAll();

    this.gerarDadosGrafico();
  }

  gerarDadosGrafico(){
    this.unidades$.subscribe(
      (unidades: UnidadeConsumidora[]) => {
        let unidadesConsumo = [];

        unidades.forEach((unidade) => {
          let consumo = 0;
          unidade.faturas.forEach((fatura: Fatura) => {
            consumo += fatura.consumo;
          })
          consumo = (consumo / (unidade.faturas.length > 0 ? unidade.faturas.length : 1)); // Média
          this.maiorConsumo = consumo > this.maiorConsumo ? consumo : this.maiorConsumo;

          unidadesConsumo.push({
            unidade: unidade.nome,
            mediaConsumo: consumo
          })
        })

        this.gerarEixoX();
        this.unidadesConsumo = unidadesConsumo;
        this.paintGraphic();
      })
  }

  gerarEixoX(){
    let interator = this.maiorConsumo/5;
    let anterior = 0;

    for(let i = 0; i < 5; i++) {
      let dado = anterior + interator;
      this.consumos.push(dado)
      anterior = dado;
    }
  }

  calcularPorcentagem(value: number){
    if(value == 0)
      return 0
    return ((value * 100)/ this.maiorConsumo).toFixed(0);
  }

  paintGraphic(){
    let color = 0;

    this.unidadesConsumo.forEach((bar) => {
      color += 1;

      if(color == 1){
        bar.color = '#9699D1'
      }else if(color == 2){
        bar.color = "#54E8BF";
      }else if(color == 3){
        bar.color = "#FCBBBF";
      }else if(color == 4){
        bar.color = "#FFD076";
      }

      if(color % 4 == 0)
					color = 0;
    })
  }

}
