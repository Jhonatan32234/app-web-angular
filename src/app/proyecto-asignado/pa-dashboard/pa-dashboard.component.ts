import { Component } from '@angular/core';
import { IproyectandWorker } from '../interface/iproyectand-worker';
@Component({
  selector: 'app-pa-dashboard',
  templateUrl: './pa-dashboard.component.html',
  styleUrl: './pa-dashboard.component.css'
})
export class PaDashboardComponent {
  proyectAws: IproyectandWorker[] = [];
  data:string =""

  asignarTrabajador(nuevoTrabajadorA:IproyectandWorker):void {
    this.proyectAws.push(nuevoTrabajadorA)
    console.log(nuevoTrabajadorA);
    console.log(localStorage.getItem("hola"));
  }

}
