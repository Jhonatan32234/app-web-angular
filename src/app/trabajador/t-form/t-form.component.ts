import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Iworker } from '../interface/iworker';
@Component({
  selector: 'app-t-form',
  templateUrl: './t-form.component.html',
  styleUrl: './t-form.component.css'
})
export class TFormComponent implements OnChanges {

  worker:Iworker={
    id:1,
    nombre:"",
    posicion:"",
    telefono:"",
    correo:"",
    salario:"",
    AExp:""
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
    id:1,
    nombre:"",
    posicion:"",
    telefono:"",
    correo:"",
    salario:"",
    AExp:""
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
