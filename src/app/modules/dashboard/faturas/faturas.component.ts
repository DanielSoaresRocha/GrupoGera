import { Component, OnInit } from '@angular/core';
import { Fatura } from '@src/app/core/models/fatura';
import { FaturaService } from '@src/app/shared/services';

@Component({
  selector: 'app-faturas',
  templateUrl: './faturas.component.html',
  styleUrls: ['./faturas.component.scss']
})
export class FaturasComponent implements OnInit {
  faturas: Fatura[] = [];
  fatura: Fatura = new Fatura();
  showModalFatura = false;
  
  constructor(private faturaService: FaturaService) { }

  ngOnInit(): void {
    this.getAllFaturas();
  }

  getAllFaturas(){
    this.showModalFatura = false;

    this.faturaService.getAll().subscribe(
      faturas => {
        this.faturas = faturas.map((fatura: Fatura) => {
            fatura.createdAt = new Date(fatura.createdAt).toLocaleDateString('pt-br');
            fatura.updatedAt = new Date(fatura.updatedAt).toLocaleDateString('pt-br');
            return fatura;
          })
      })
  }

  formatValue(value: number): string{
    return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }

  deleteFatura(fatura: Fatura){
    if(!confirm(`Têm certeza eu deseja excluir a fatura de valor ${fatura.valor}?`))
      return

    this.faturaService.delete(fatura).subscribe(
      () => {
        this.getAllFaturas();
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
}
