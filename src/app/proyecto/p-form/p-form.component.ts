import { Component, EventEmitter, Output } from '@angular/core';
import { Iproyect } from '../interface/iproyect';
@Component({
  selector: 'app-p-form',
  templateUrl: './p-form.component.html',
  styleUrl: './p-form.component.css'
})
export class PFormComponent {
  idJefe = [1,2,3,4,5]
  estados= ["Finalizada","En construccion","Casi finalizada","Retraso","Cancelada"]
  proyecto:Iproyect ={
    id:1,
    nombre:"",
    ubicacion:"",
    fechaInicio:"",
    fechaFin:"",
    presupuesto:0,
    estado:"",
    idJefeProyecto:1
  }
  @Output() proyectoCreado = new EventEmitter<Iproyect>();

  mostrar():void{
    this.proyectoCreado.emit(this.proyecto)
  }

  limpiar(): void{
    this.proyecto={
      id:1,
    nombre:"",
    ubicacion:"",
    fechaInicio:"",
    fechaFin:"",
    presupuesto:0,
    estado:"",
    idJefeProyecto:1
    }

  }

}
