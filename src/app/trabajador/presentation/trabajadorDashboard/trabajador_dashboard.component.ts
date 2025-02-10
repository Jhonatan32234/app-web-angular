import { Component, OnInit } from '@angular/core';
import { Iworker } from '../../domain/entities/worker';
import { TrabajadorUseCase } from '../../application/useCase/worker_useCase';

@Component({
  selector: 'trabajador-dashboard',
  templateUrl: './trabajador_dashboard.component.html',
})
export class TrabajadorDashboardComponent implements OnInit {
  trabajadores: Iworker[] = [];
  editTrabajador: Iworker | null = null;

  constructor(private trabajadorUseCase: TrabajadorUseCase) {}

  ngOnInit(): void {
    this.cargarTrabajadores();
  }

  cargarTrabajadores(): void {
    this.trabajadorUseCase.getTrabajadores().subscribe(trabajador => {
      this.trabajadores = trabajador;
    });
  }

  agregarTrabajador(nuevoTrabajador: Iworker): void {
    if (this.editTrabajador) {
      this.trabajadorUseCase.actualizarTrabajador(nuevoTrabajador).subscribe(() => {
        this.cargarTrabajadores();
      });
      this.editTrabajador = null;
    } else {
      this.trabajadorUseCase.crearTrabajador(nuevoTrabajador).subscribe(() => {
        this.cargarTrabajadores();
      });
    }
  }

  editarTrabajador(indice: number): void {
    const trabajadorSeleccionado = this.trabajadores[indice];
    this.editTrabajador = { ...trabajadorSeleccionado };
  }

  eliminarTrabajador(indice: number): void {
    const trabajador = this.trabajadores[indice];
    this.trabajadorUseCase.eliminarTrabajador(trabajador.idtrabajador).subscribe(() => {
      this.cargarTrabajadores();
    });
  }
}
