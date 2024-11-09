import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproyect } from '../../proyecto/interface/iproyect';
import { IproyectandWorker } from '../interface/iproyectand-worker';
import { Observable } from 'rxjs';
import { Iworker } from '../../trabajador/interface/iworker';

@Injectable({
  providedIn: 'root'
})
export class ProyectoAsignadoService {
  private apiUrlProyecto = 'http://127.0.0.1:8000/proyectos'
  private apiUrlTrabajador = 'http://127.0.0.1:8000/trabajadores'
  private apiUrlProyectoAs = 'http://127.0.0.1:8000/proyectos_asignados'
  
  
  constructor(private http:HttpClient) { }

  getProyectoAs(){
    return this.http.get<IproyectandWorker[]>(this.apiUrlProyectoAs)
  }

  crearProyectoAs(proyectoAs:IproyectandWorker):Observable<IproyectandWorker>{
    return this.http.post<IproyectandWorker>(`${this.apiUrlProyectoAs}/create`,proyectoAs)
  }

  actualizarProyectoAs(proyectoAs:IproyectandWorker):Observable<IproyectandWorker>{
    console.log(proyectoAs);
    return this.http.put<IproyectandWorker>(`${this.apiUrlProyectoAs}/${proyectoAs.idproyectoasignado}`,proyectoAs)
  }

  eliminarProyectoAs(idProyectoAsignado:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrlProyectoAs}/${idProyectoAsignado}`)
  }

  getTrabajdores():Observable<Iworker[]>{
    return this.http.get<Iworker[]>(this.apiUrlTrabajador)
  }

  getProyecto():Observable<Iproyect[]>{
    return this.http.get<Iproyect[]>(this.apiUrlProyecto)
  }

}
