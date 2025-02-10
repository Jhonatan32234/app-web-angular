import { Observable } from 'rxjs';
import { Ichief } from './entities/chief';

export interface IJefeService {
  getJefe(): Observable<Ichief[]>;
  crearJefe(jefe: Ichief): Observable<Ichief>;
  actualizarJefe(jefe: Ichief): Observable<Ichief>;
  eliminarJefe(idjefe: number): Observable<void>;
}
