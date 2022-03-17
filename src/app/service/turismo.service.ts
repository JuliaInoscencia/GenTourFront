import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Turismo } from '../model/Turismo';

@Injectable({
  providedIn: 'root'
})
export class TurismoService {
  tokenSalvo: string = environment.token

  constructor(private http: HttpClient) {}

  token = {
    headers: new HttpHeaders().set('Authorization', this.tokenSalvo)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', this.tokenSalvo)
    }
  }

    getAllTurismo(): Observable <Turismo[]>{
      return this.http.get<Turismo[]>('https://gentour.herokuapp.com/turismo')
    }

    getByIdTurismo(id: number): Observable<Turismo>{
      return this.http.get<Turismo>(`https://gentour.herokuapp.com/turismo/${id}`)
    }

    postTurismo(turismo:Turismo): Observable<Turismo>{
      this.refreshToken()
      return this.http.post<Turismo>('https://gentour.herokuapp.com/turismo/save', turismo, this.token)
    }

    putTurismo(turismo: Turismo): Observable<Turismo>{
      this.refreshToken()
      return this.http.put<Turismo>('https://gentour.herokuapp.com/turismo/update', turismo, this.token)
    }

    deleteTurismo(id: number) {
      this.refreshToken()
      return this.http.delete(`https://gentour.herokuapp.com/turismo/${id}`, this.token)
    }
}
