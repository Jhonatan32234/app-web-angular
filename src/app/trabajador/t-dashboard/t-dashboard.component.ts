import { Component } from '@angular/core';
import { Iworker } from '../interface/iworker';
@Component({
  selector: 'app-t-dashboard',
  templateUrl: './t-dashboard.component.html',
  styleUrl: './t-dashboard.component.css'
})
export class TDashboardComponent {
  workers:Iworker[] = [];
  editTrabajador:Iworker | null = null;

  agregarTrabajador(nuevoTrabajador: Iworker): void {
    if (this.editTrabajador) {
      // Si existe un trabajador en edición, actualiza los datos
      const index = this.workers.findIndex(worker => worker.id === this.editTrabajador?.id);
      if (index !== -1) {
        this.workers[index] = { ...nuevoTrabajador };
      }
      this.editTrabajador = null; // Salir del modo edición
    } else {
      // Si no hay edición, añade un nuevo trabajador
      nuevoTrabajador.id = this.workers.length + 1;
      this.workers.push(nuevoTrabajador);
    }
  }

  editarTrabajador(indice:number):void{
    const trabajadorSeleccionado = this.workers[indice]
    this.editTrabajador = {...trabajadorSeleccionado}

  }

  eliminarTrabajador(indice: number): void {
    this.workers.splice(indice, 1);
  }
}
