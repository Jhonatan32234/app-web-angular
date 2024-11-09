import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Iproyect } from '../interface/iproyect';
import { Ichief } from '../../jefe/interface/ichief';
import { ProyectoService } from '../service/proyecto.service';
@Component({
  selector: 'app-p-form',
  templateUrl: './p-form.component.html',
  styleUrl: './p-form.component.css'
})
export class PFormComponent implements OnInit,OnChanges{
  jefes:Ichief[] = [];

  proyecto:Iproyect ={
    idproyecto:0,
    nombreproyecto:"",
    ubicacion:"",
    fechainicio:"",
    fechafinal:"",
    presupuesto:0,
    estadoproyecto:"",
    idjefeproyecto:0
  }

  constructor(private proyectoService:ProyectoService){}

  ngOnInit(): void {
    this.cargarJefes();
      
  }

  cargarJefes():void{
    this.proyectoService.getJefes().subscribe(
      (jefes:Ichief[]) => {
        this.jefes = jefes;
      }
    )
  }

  @Output() proyectoCreado = new EventEmitter<Iproyect>();
  @Input() proyect:Iproyect | null = null;
  editando:boolean = false;

  mostrar():void{
    this.proyectoCreado.emit(this.proyecto);
    this.limpiar();
  }

  limpiar(): void{
    this.proyecto={
    idproyecto:0,
    nombreproyecto:"",
    ubicacion:"",
    fechainicio:"",
    fechafinal:"",
    presupuesto:0,
    estadoproyecto:"",
    idjefeproyecto:0
    }
    this.editando = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
      if (changes['proyect'] && changes['proyect'].currentValue) {
        this.proyecto = {...changes['proyect'].currentValue}
        this.editando = true;
      }
  }
}
