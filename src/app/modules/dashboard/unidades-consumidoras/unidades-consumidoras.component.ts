import { Component, OnInit } from '@angular/core';
import { UnidadeConsumidora } from '@src/app/core/models/unidade-consumidora.model';
import { UnidadeConsumidoraService } from '@src/app/shared/services';

@Component({
  selector: 'app-unidades-consumidoras',
  templateUrl: './unidades-consumidoras.component.html',
  styleUrls: ['./unidades-consumidoras.component.scss']
})
export class UnidadesConsumidorasComponent implements OnInit {
  unidade: UnidadeConsumidora = new UnidadeConsumidora();
  unidades: UnidadeConsumidora[] = [];
  addUnidade: boolean = false;
  
  constructor(private unidadeConsumidoraService: UnidadeConsumidoraService) { }

  ngOnInit(): void {
    this.getAllUnidades();
  }

  getAllUnidades(){
    this.addUnidade = false;
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

  editUnidade(unidade: UnidadeConsumidora){
    this.unidade = unidade;
    this.addUnidade = true;
  }

  deleteUnidade(unidade: UnidadeConsumidora){
    if(!confirm(`Têm certeza eu deseja excluir a unidade ${unidade.nome}?`))
      return

    this.unidadeConsumidoraService.delete(unidade).subscribe(
      () => {
        this.getAllUnidades();
      }
    )
  }

  closeModal(){
    this.unidade = new UnidadeConsumidora();
    this.addUnidade = false;
  }

}
