import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iworker } from '../domain/entities/worker';
import { ITrabajadorService } from '../domain/worker.repository';
@Injectable({
  providedIn: 'root'
})
export class TrabajadorService implements ITrabajadorService {
  private apiUrlTrabajador = 'http://127.0.0.1:8000/trabajador';

  constructor(private http: HttpClient) {}

  getTrabajador(): Observable<Iworker[]> {
    return this.http.get<Iworker[]>(this.apiUrlTrabajador);
  }

  crearTrabajador(trabajador: Iworker): Observable<Iworker> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Iworker>(this.apiUrlTrabajador, trabajador, { headers });
  }

  actualizarTrabajador(trabajador: Iworker): Observable<Iworker> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Iworker>(`${this.apiUrlTrabajador}/${trabajador.idtrabajador}`, trabajador, { headers });
  }

  eliminarTrabajador(idtrabajador: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrlTrabajador}/${idtrabajador}`);
  }
}
