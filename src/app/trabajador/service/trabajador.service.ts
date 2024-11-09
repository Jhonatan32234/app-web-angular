import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iworker } from '../interface/iworker';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {

  private apiUrlTrabajdor = 'http://127.0.0.1:8000/trabajadores'

  constructor(private http: HttpClient) { }

  getTrabajador(): Observable<Iworker[]>{
    return this.http.get<Iworker[]>(this.apiUrlTrabajdor)
  }

  crearTrabajador(trabajador:Iworker):Observable<Iworker>{
    return this.http.post<Iworker>(`${this.apiUrlTrabajdor}/create`,trabajador)
  }

  actualizacrTrabajador(trabajador:Iworker):Observable<Iworker>{
    return this.http.put<Iworker>(`${this.apiUrlTrabajdor}/${trabajador.idtrabajador}`,trabajador)
  }

  eliminarTrabajador(idtrabajador:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrlTrabajdor}/${idtrabajador}`)
  }
}
