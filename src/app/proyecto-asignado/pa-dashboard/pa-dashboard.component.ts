import { Component, OnInit } from '@angular/core';
import { IproyectandWorker } from '../interface/iproyectand-worker';
import { ProyectoAsignadoService } from '../service/proyecto-asignado.service';
@Component({
  selector: 'app-pa-dashboard',
  templateUrl: './pa-dashboard.component.html',
  styleUrl: './pa-dashboard.component.css'
})
export class PaDashboardComponent implements OnInit {
  proyectAs: IproyectandWorker[] = [];
  editProyectoAs:IproyectandWorker | null = null;

  constructor(private proyectoAsService:ProyectoAsignadoService){  }

  ngOnInit(): void {
    this.cargarProyectosAs();
      
  }

  cargarProyectosAs():void{
    this.proyectoAsService.getProyectoAs().subscribe(proyectoAs =>{
      this.proyectAs = proyectoAs;
    })
  }


  agregarProyectoAs(nuevoProyectoAs:IproyectandWorker): void{
    if (this.editProyectoAs) {
      console.log("Actualizando");
      this.proyectoAsService.actualizarProyectoAs(nuevoProyectoAs).subscribe(()=>{
        this.cargarProyectosAs();
      });
      this.editProyectoAs = null;
    }else{
      console.log("Creando");
      this.proyectoAsService.crearProyectoAs(nuevoProyectoAs).subscribe(()=>{
        this.cargarProyectosAs();
      })
    }
  }

  editarProyectosAs(indice:number):void{
    console.log("editando1");
    const proyectoAsSeleccionado = this.proyectAs[indice];
    this.editProyectoAs = {...proyectoAsSeleccionado}
    console.log("editando2");
  }

  eliminarProyectoAs(indice:number):void{
    const proyectoAs = this.proyectAs[indice];
    this.proyectoAsService.eliminarProyectoAs(proyectoAs.idproyectoasignado).subscribe(()=>{
      this.cargarProyectosAs()
    })
  }

  

}
