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
  
  constructor(private faturaService: FaturaService) { }

  ngOnInit(): void {
    this.faturaService.getAll().subscribe(
      faturas => {
        this.faturas = faturas.map((fatura: Fatura) => {
            fatura.createdAt = new Date(fatura.createdAt).toLocaleDateString('pt-br');
            fatura.updatedAt = new Date(fatura.updatedAt).toLocaleDateString('pt-br');
            return fatura;
          })
      }
    )
  }

  formatValue(value: number): string{
    return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }
}
