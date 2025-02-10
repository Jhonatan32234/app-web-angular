import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Ichief } from '../../domain/entities/chief';
import { IJefeService } from '../../domain/chief.repository';
import { JefeService } from '../../infraestructure/chief.service';


@Injectable({
  providedIn: 'root'
})
export class JefeUseCase {
  constructor(
    @Inject(JefeService) private jefeService: IJefeService
  ) {}

  getJefe(): Observable<Ichief[]> {
    return this.jefeService.getJefe();
  }

  crearJefe(jefe: Ichief): Observable<Ichief> {
    return this.jefeService.crearJefe(jefe);
  }

  actualizarJefe(jefe: Ichief): Observable<Ichief> {
    return this.jefeService.actualizarJefe(jefe);
  }

  eliminarJefe(idjefe: number): Observable<void> {
    return this.jefeService.eliminarJefe(idjefe);
  }
}
