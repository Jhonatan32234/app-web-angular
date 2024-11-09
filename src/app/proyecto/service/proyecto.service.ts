import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproyect } from '../interface/iproyect';
import { Ichief } from '../../jefe/interface/ichief';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private apiUrlProyecto = 'http://127.0.0.1:8000/proyectos'
  private apiUrlJefe = 'http://127.0.0.1:8000/jefe'

  constructor(private http:HttpClient) { }

  getProyecto():Observable<Iproyect[]>{
    return this.http.get<Iproyect[]>(this.apiUrlProyecto);
  }

  crearProyecto(proyecto:Iproyect):Observable<Iproyect>{
    return this.http.post<Iproyect>(`${this.apiUrlProyecto}/create`,proyecto);
  }

  actualizarProyecto(proyecto:Iproyect):Observable<Iproyect>{
    return this.http.put<Iproyect>(`${this.apiUrlProyecto}/${proyecto.idproyecto}`,proyecto)
  }

  eliminarProyecto(idproyecto:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrlProyecto}/${idproyecto}`)
  }

  getJefes():Observable<Ichief[]>{
    return this.http.get<Ichief[]>(this.apiUrlJefe)
  }
  
}
