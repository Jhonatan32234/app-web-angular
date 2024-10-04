import { Component, EventEmitter, Output } from '@angular/core';
import { IproyectandWorker } from '../interface/iproyectand-worker';

@Component({
  selector: 'app-pa-form',
  templateUrl: './pa-form.component.html',
  styleUrl: './pa-form.component.css'
})
export class PaFormComponent {
  idproyecto=[1,2,3,4,5]
  idtrabajador=[6,7,8,9,0]
  rolP=["a1","b2","c3"]
  proyectAw:IproyectandWorker={
    idProyectoAsignado:1,
    idProyecto:1,
    idTrabajador:1,
    fechaAsignada:"",
    horastrabajadas:0,
    rolProyecto:""
  }

  @Output() trabajadorAsignado = new EventEmitter<IproyectandWorker>();

  mostrar():void{
    this.trabajadorAsignado.emit(this.proyectAw)
    this.limpiar()

  }
  limpiar(): void {
    this.proyectAw = {
      idProyectoAsignado:0,
      idProyecto:0,
    idTrabajador:0,
    fechaAsignada:"",
    horastrabajadas:0,
    rolProyecto:""
    }
  }
  
}
