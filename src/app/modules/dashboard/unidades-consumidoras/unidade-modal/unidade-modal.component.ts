import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UnidadeConsumidora } from '@src/app/core/models/unidade-consumidora.model';
import { UnidadeConsumidoraService } from '@src/app/shared/services';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-unidade-modal',
  templateUrl: './unidade-modal.component.html',
  styleUrls: ['./unidade-modal.component.scss']
})
export class UnidadeModalComponent implements OnInit {
  formUnidade: FormGroup;

  @Input() unidade: UnidadeConsumidora = new UnidadeConsumidora();

  @Output() submitButton = new EventEmitter();
  @Output() onCloseModal = new EventEmitter();

  constructor(private unidadeConsumidoraService: UnidadeConsumidoraService) { }

  reset(){
    this.formUnidade.reset();
    this.submitButton.emit();
  }

  ngOnInit(): void {
    this.createForm(this.unidade);
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
    if(this.unidade.id){
      this.unidadeConsumidoraService.update(this.formUnidade.value, this.unidade.id).subscribe(() => this.reset())
      return;
    }
    
    this.unidadeConsumidoraService.add(this.formUnidade.value).subscribe(() => this.reset())
  }

  closeModal(){
    this.onCloseModal.emit();
  }
}
