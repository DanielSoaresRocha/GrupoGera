import { Component, OnInit } from '@angular/core';
import { UnidadeConsumidora } from '@src/app/core/models/unidade-consumidora.model';
import { UnidadeConsumidoraService } from '@src/app/shared/services';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-unidade-modal',
  templateUrl: './unidade-modal.component.html',
  styleUrls: ['./unidade-modal.component.scss']
})
export class UnidadeModalComponent implements OnInit {
  unidade: UnidadeConsumidora;
  formUnidade: FormGroup;

  constructor(private unidadeConsumidoraService: UnidadeConsumidoraService) { }

  ngOnInit(): void {
    this.createForm(new UnidadeConsumidora());
  }

  add(){
    this.unidadeConsumidoraService.add(this.unidade);
  }

  createForm(unidade: UnidadeConsumidora) {
    this.formUnidade = new FormGroup({
      nome: new FormControl(unidade.nome),
      endereco: new FormControl(unidade.endereco),
      distribuidora: new FormControl(unidade.distribuidora),
      numero: new FormControl(unidade.numero)
    })
  }

  submit(){
    this.unidadeConsumidoraService.add(this.formUnidade.value).subscribe(
      (response) => {
        console.log(response)
      },
      (error) => {
        console.log(error)
      }
    )
  }

}
