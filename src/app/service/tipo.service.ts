import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tipos } from '../model/Tipos';

@Injectable({
  providedIn: 'root'
})
export class TipoService {

  constructor(private http: HttpClient ) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }
  refreshToken() {
    this.token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  getAllTipo(): Observable<Tipos[]> {
    return this.http.get<Tipos[]>('https://gentour.herokuapp.com/tipo')
  }

  getByIdTipo(id: number): Observable<Tipos>{
    return this.http.get<Tipos>(`https://gentour.herokuapp.com/tipo/${id}`)
  }

  postTipo(tipo: Tipos): Observable<Tipos>{
    return this.http.post<Tipos>('https://gentour.herokuapp.com/tipo/save', tipo, this.token)
  }

  putTipo(tipo: Tipos): Observable<Tipos>{
    return this.http.put<Tipos>('https://gentour.herokuapp.com/tipo/update', tipo, this.token)
  }

  deleteTipo(id: number){
    return this.http.delete(`https://gentour.herokuapp.com/tipo/${id}`, this.token)
    }
}
