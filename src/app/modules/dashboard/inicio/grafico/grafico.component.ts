import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Fatura } from '@src/app/core/models/fatura';
import { UnidadeConsumidora } from '@src/app/core/models/unidade-consumidora.model';

interface UnidadesGraphic{
  unidade: string;
  mediaConsumo: number;
  color?: string;
}

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.scss']
})
export class GraficoComponent implements OnInit{
  @Input() unidadesConsumidoras: UnidadeConsumidora[] = [];

  unidadesConsumo: UnidadesGraphic[];
  consumos: number[] = [];
  maiorConsumo = 0;

  constructor() { }

  ngOnInit(): void {
    this.gerarDadosGrafico();
  }

  gerarDadosGrafico(){
    let unidadesConsumo = [];

    this.unidadesConsumidoras.forEach((unidade) => {
      let consumo = 0;
      unidade.faturas.forEach((fatura: Fatura) => {
        consumo += fatura.consumo;
      })
      consumo = (consumo / (unidade.faturas.length > 0 ? unidade.faturas.length : 1)); // Média
      this.maiorConsumo = consumo > this.maiorConsumo ? consumo : this.maiorConsumo;

      unidadesConsumo.push({
        unidade: unidade.nome,
        mediaConsumo: consumo.toFixed(0)
      })
    })

    this.gerarEixoX();
    this.unidadesConsumo = unidadesConsumo;
    this.paintGraphic();
  }

  gerarEixoX(){
    let interator = this.maiorConsumo/4;
    let anterior = 0;

    for(let i = 0; i < 4; i++) {
      let dado = anterior + interator;
      this.consumos.push(dado);
      anterior = dado;
    }
  }

  calcularPorcentagem(consumoMedio: number){
    if(consumoMedio == 0)
      return 0
    return ((consumoMedio * 100)/ this.maiorConsumo).toFixed(0);
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
