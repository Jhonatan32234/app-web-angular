import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Ichief } from '../../domain/entities/chief';
@Component({
  selector: 'jefe-form',
  templateUrl: './jefe_form.component.html',
})


export class JefeFormComponent implements OnChanges{
  chief:Ichief={
    idjefeproyecto:0,
    nombrejefe:"",
    telefono:"",
    correo:"",
    aniosexperiencia:0,
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
    idjefeproyecto:0,
    nombrejefe:"",
    telefono:"",
    correo:"",
    aniosexperiencia:0,
    salario:0
  }
  this.editando=false;
    }

  ngOnChanges(changes: SimpleChanges): void {
      if (changes["chiefE"] && changes["chiefE"].currentValue) {
        this.chief = {...changes["chiefE"].currentValue}
        this.editando = true;
      }
  }

  }



