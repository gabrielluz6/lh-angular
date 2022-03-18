import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vagas } from './models/Vagas.model';
@Injectable({
  providedIn: 'root'
})
export class VagasService {
  private url = "http://localhost:3000/vagas";
  
  constructor(private _httpClient: HttpClient) { }
  
  getVagas():Observable<Vagas[]>{
    return this._httpClient.get<Vagas[]>(this.url)
  }
  cadastrarVaga(vagas: Vagas):Observable<Vagas[]>{
    return this._httpClient.post<Vagas[]>(this.url,vagas);
  }
  atualizarVaga(id:any ,vaga: Vagas):Observable<Vagas[]>{
    const urlAtualizar = `${this.url}/${id}`
    return this._httpClient.put<Vagas[]>(urlAtualizar,vaga);
  }
  removerVaga(id:any):Observable<Vagas[]>{
    const urlDeletar = `${this.url}/${id}`
    return this._httpClient.delete<Vagas[]>(urlDeletar);
  }

}
