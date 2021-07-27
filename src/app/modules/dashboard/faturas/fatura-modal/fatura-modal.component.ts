import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Fatura } from '@src/app/core/models/fatura';
import { FaturaService } from '@src/app/shared/services';

@Component({
  selector: 'app-fatura-modal',
  templateUrl: './fatura-modal.component.html',
  styleUrls: ['./fatura-modal.component.scss']
})
export class FaturaModalComponent implements OnInit {
  formFatura: FormGroup;

  @Input() fatura: Fatura = new Fatura();

  @Output() submitButton = new EventEmitter();
  @Output() onCloseModal = new EventEmitter();

  constructor(private faturaService: FaturaService) { }

  reset(){
    this.formFatura.reset();
    this.submitButton.emit();
  }

  ngOnInit(): void {
    this.createForm(this.fatura);
  }

  add(){
    this.faturaService.add(this.fatura);
  }

  createForm(fatura: Fatura) {
    this.formFatura = new FormGroup({
      consumo: new FormControl(fatura.consumo),
      valor: new FormControl(fatura.valor),
      data_de_vencimento: new FormControl(fatura.data_de_vencimento),
      unidadeConsumidoraId: new FormControl(fatura.unidadeConsumidoraId),
      id: new FormControl(fatura.id)
    })
  }

  submit(){
    if(this.fatura.id){
      this.faturaService.update(this.formFatura.value, this.fatura.id).subscribe(() => this.reset())
      return;
    }
    
    this.faturaService.add(this.formFatura.value).subscribe(() => this.reset())
  }

  closeModal(){
    this.onCloseModal.emit();
  }
}
