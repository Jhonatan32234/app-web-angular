import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Iworker } from '../../domain/entities/worker';


@Component({
  selector: 'trabajador-form',
  templateUrl: './trabajador_form.component.html',
})
export class TrabajadorFormComponent implements OnChanges {

  worker:Iworker={
    idtrabajador:0,
    nombretrabajador:"",
    posicion:"",
    telefono:"",
    correo:"",
    salario:0,
    aniosexperiencia:0
  }


  @Output() trabajadorCreado = new EventEmitter<Iworker>();
  @Input() workerE:Iworker | null = null;
  editando:boolean = false;

  mostrar():void {
    this.trabajadorCreado.emit(this.worker)
    this.limpiar();
  }

  limpiar():void{
  this.worker={
    idtrabajador:0,
    nombretrabajador:"",
    posicion:"",
    telefono:"",
    correo:"",
    salario:0,
    aniosexperiencia:0
  }
  this.editando = false;

  }

  ngOnChanges(changes: SimpleChanges): void {
      if (changes['workerE'] && changes['workerE'].currentValue) {
        this.worker = {...changes['workerE'].currentValue}
       this.editando= true;
      }
  }
}