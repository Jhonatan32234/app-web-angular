import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Iworker } from '../../domain/entities/worker';
import { ITrabajadorService } from '../../domain/worker.repository';
import { TrabajadorService } from '../../infraestructure/worker.service';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorUseCase {
  constructor(
    @Inject(TrabajadorService) private trabajadorService: ITrabajadorService
  ) {}

  getTrabajadores(): Observable<Iworker[]> {
    return this.trabajadorService.getTrabajador();
  }

  crearTrabajador(trabajador: Iworker): Observable<Iworker> {
    return this.trabajadorService.crearTrabajador(trabajador);
  }

  actualizarTrabajador(trabajador: Iworker): Observable<Iworker> {
    return this.trabajadorService.actualizarTrabajador(trabajador);
  }

  eliminarTrabajador(idtrabajador: number): Observable<void> {
    return this.trabajadorService.eliminarTrabajador(idtrabajador);
  }
}
