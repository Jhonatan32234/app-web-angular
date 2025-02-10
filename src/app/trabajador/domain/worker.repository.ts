import { Observable } from 'rxjs';
import { Iworker } from './entities/worker';


export interface ITrabajadorService {
  getTrabajador(): Observable<Iworker[]>;
  crearTrabajador(trabajador: Iworker): Observable<Iworker>;
  actualizarTrabajador(trabajador: Iworker): Observable<Iworker>;
  eliminarTrabajador(idtrabajador: number): Observable<void>;
}
