import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fatura } from '@src/app/core/models/fatura';
import { Observable } from 'rxjs';
import { environment as env } from '@src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FaturaService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Fatura[]>{
    return this.httpClient.get<Fatura[]>(`${env.baseUrl}/fatura`);
  }
}
