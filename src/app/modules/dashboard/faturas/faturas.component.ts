import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fatura } from '@src/app/core/models/fatura';
import { UnidadeConsumidora } from '@src/app/core/models/unidade-consumidora.model';
import { FaturaService, UnidadeConsumidoraService } from '@src/app/shared/services';

@Component({
  selector: 'app-faturas',
  templateUrl: './faturas.component.html',
  styleUrls: ['./faturas.component.scss']
})
export class FaturasComponent implements OnInit {
  faturas: Fatura[] = [];
  unidades: UnidadeConsumidora[] = [];
  idUnidade: number = 0;

  fatura: Fatura = new Fatura();
  showModalFatura = false;
  
  constructor(
    private faturaService: FaturaService,
    private unidadeConsumidoraService: UnidadeConsumidoraService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.idUnidade = parseInt(this.activatedRoute.snapshot.paramMap.get('idUnidade'))
    this.getAllUnidades();
  }

  getAllUnidades(){
    this.showModalFatura = false;
    this.unidadeConsumidoraService.getAll().subscribe(
      unidades => {
        this.unidades = unidades;
        if(this.idUnidade)
          this.faturas = this.getUnidadeById(this.idUnidade).faturas;
        else
          this.getAllFaturas();
      })
  }

  getAllFaturas(){
    this.faturaService.getAll().subscribe(faturas => this.faturas = faturas);
  }

  deleteFatura(fatura: Fatura){
    if(!confirm(`Têm certeza eu deseja excluir a fatura de valor ${fatura.valor}?`))
      return

    this.faturaService.delete(fatura).subscribe(
      () => {
        this.getAllUnidades();
      }
    )
  }

  editFatura(fatura: Fatura){
    this.fatura = fatura;
    this.showModalFatura = true;
  }

  closeModal(){
    this.fatura = new Fatura();
    this.showModalFatura = false;
  }

  getUnidadeById(id: number): UnidadeConsumidora{
    let unidade: UnidadeConsumidora = null;
    
    for(let u of this.unidades){
      if(u.id === id){
        unidade = u;
        break;
      }
    }
    return unidade;
  }
}
