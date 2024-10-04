import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Ichief } from '../interface/ichief';


@Component({
  selector: 'app-j-form',
  templateUrl: './j-form.component.html',
  styleUrl: './j-form.component.css'
})
export class JFormComponent implements OnChanges{
  chief:Ichief={
    id:1,
    nombre:"",
    telefono:"",
    correo:"",
    AExp:0,
    salario:0
  }
  @Output() jefeCreado = new EventEmitter<Ichief>();
  @Input() chiefE:Ichief | null = null;
  editando:boolean = false;

  mostrar() :void{
    this.jefeCreado.emit(this.chief)
    this.limpiar()

  }

  limpiar(): void{
    this.chief={
      id:1,
    nombre:"",
    telefono:"",
    correo:"",
    AExp:0,
    salario:0
  }
    }

  ngOnChanges(changes: SimpleChanges): void {
      if (changes["chiefE"] && changes["chiefE"].currentValue) {
        this.chief = {...changes["chiefE"].currentValue}
        this.editando = true;
      }
  }

  }



