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

  add(fatura: Fatura): Observable<Fatura>{
    return this.httpClient.post<Fatura>(`${env.baseUrl}fatura`, fatura);
  }

  delete(Fatura: Fatura): Observable<Fatura>{
    return this.httpClient.delete<Fatura>(`${env.baseUrl}fatura/${Fatura.id}`);
  }

  update(fatura: Fatura, idFatura: number): Observable<Fatura>{
    return this.httpClient.put<Fatura>(`${env.baseUrl}fatura/${idFatura}`, fatura);
  }
}
