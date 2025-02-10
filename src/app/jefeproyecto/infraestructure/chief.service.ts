import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ichief } from '../domain/entities/chief';
import { IJefeService } from '../domain/chief.repository';
@Injectable({
  providedIn: 'root'
})
export class JefeService implements IJefeService {
  private apiUrlJefe = 'http://127.0.0.1:8000/coordinador';

  constructor(private http: HttpClient) {}

  getJefe(): Observable<Ichief[]> {
    return this.http.get<Ichief[]>(this.apiUrlJefe);
  }

  crearJefe(jefe: Ichief): Observable<Ichief> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Ichief>(this.apiUrlJefe, jefe, { headers });
  }

  actualizarJefe(jefe: Ichief): Observable<Ichief> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Ichief>(`${this.apiUrlJefe}/${jefe.idjefeproyecto}`, jefe, { headers });
  }

  eliminarJefe(idjfe: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrlJefe}/${idjfe}`);
  }
}
