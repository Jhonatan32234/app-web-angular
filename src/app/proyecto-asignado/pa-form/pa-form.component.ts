import { Component, EventEmitter, OnInit, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IproyectandWorker } from '../interface/iproyectand-worker';
import { Iworker } from '../../trabajador/interface/iworker';
import { Iproyect } from '../../proyecto/interface/iproyect';
import { ProyectoAsignadoService } from '../service/proyecto-asignado.service';

@Component({
  selector: 'app-pa-form',
  templateUrl: './pa-form.component.html',
  styleUrl: './pa-form.component.css'
})
export class PaFormComponent implements OnInit,OnChanges {
  trabajadores: Iworker[]=[];
  proyectos: Iproyect[]= [];

  proyectAs:IproyectandWorker={
    idproyectoasignado:0,
    idproyecto:0,
    idtrabajador:0,
    fechaasignacion:"",
    horastrabajadas:0,
    rolproyecto:""
  }

  constructor(private proyectoAsService:ProyectoAsignadoService){}

  ngOnInit(): void {
    this.cargarProyectos();
    this.cargarTrabajadores();
      
  }

  cargarTrabajadores():void{
    this.proyectoAsService.getTrabajdores().subscribe(
      (trabajador:Iworker[])=>{
        this.trabajadores = trabajador;
      }
    )
  }

  cargarProyectos():void{
    this.proyectoAsService.getProyecto().subscribe(
      (proyecto:Iproyect[]) =>{
        this.proyectos = proyecto
      }
    )
  }

  @Output() proyetoAsignadoCreado = new EventEmitter<IproyectandWorker>();
  @Input() proyectoAsignado:IproyectandWorker | null = null;
  editando:boolean = false;

  mostrar():void{
    this.proyetoAsignadoCreado.emit(this.proyectAs)
    this.limpiar()

  }
  limpiar(): void {
    this.proyectAs = {
      idproyectoasignado:0,
      idproyecto:0,
      idtrabajador:0,
      fechaasignacion:"",
      horastrabajadas:0,
      rolproyecto:""
    }
    this.editando = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
      if (changes['proyectoAsignado'] && changes['proyectoAsignado'].currentValue) {
        this.proyectAs = {...changes['proyectoAsignado'].currentValue}
        this.editando = true;
      }
  }

  
}
