import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ichief } from '../interface/ichief';

@Injectable({
  providedIn: 'root'
})
export class JefeService {

  private apiUrlJefe = "http://127.0.0.1:8000/jefe"

  constructor(private http:HttpClient) { }

  getJefe(): Observable<Ichief[]>{
    return this.http.get<Ichief[]>(this.apiUrlJefe)
  }

  crearJefe(jefe:Ichief):Observable<Ichief>{
    return this.http.post<Ichief>(`${this.apiUrlJefe}/create`,jefe)
  }

  actualizarJefe(jefe:Ichief):Observable<Ichief>{
    return this.http.put<Ichief>(`${this.apiUrlJefe}/${jefe.idjefeproyecto}`,jefe)
  }

  eliminarJefe(idJefe:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrlJefe}/${idJefe}`)
  }
}
