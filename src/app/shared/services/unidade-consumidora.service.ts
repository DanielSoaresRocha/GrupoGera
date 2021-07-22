import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment as env } from '@src/environments/environment';
import { UnidadeConsumidora } from '@src/app/core/models/unidade-consumidora.model';

@Injectable({
  providedIn: 'root'
})
export class UnidadeConsumidoraService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<UnidadeConsumidora[]>{
    return this.httpClient.get<UnidadeConsumidora[]>(`${env.baseUrl}/unidadeConsumidora`);
  }

  add(unidade: UnidadeConsumidora): Observable<UnidadeConsumidora>{
    return this.httpClient.post<UnidadeConsumidora>(`${env.baseUrl}/unidadeConsumidora`, unidade);
  }
}
