import { Component, OnInit } from '@angular/core';
import { Iproyect } from '../interface/iproyect';
import { ProyectoService } from '../service/proyecto.service';

@Component({
  selector: 'app-p-dashboard',
  templateUrl: './p-dashboard.component.html',
  styleUrl: './p-dashboard.component.css'
})
export class PDashboardComponent implements OnInit {
  proyects:Iproyect[]= [];
  editProyecto:Iproyect | null = null;

  constructor(private proyectoService:ProyectoService){}

  ngOnInit(): void {
    this.cargarProyectos();
  }

  cargarProyectos():void{
    this.proyectoService.getProyecto().subscribe(proyecto=>{
      this.proyects = proyecto;
    })
  }


  agregarProyecto(nuevoProyecto:Iproyect): void{
    if (this.editProyecto) {
      this.proyectoService.actualizarProyecto(nuevoProyecto).subscribe(()=>{
        this.cargarProyectos();
      });
      this.editProyecto = null;
    }else{
      this.proyectoService.crearProyecto(nuevoProyecto).subscribe(()=>{
        this.cargarProyectos();
      })
    }
  }



  editarProyectos(indice:number):void{
    const proyectoSeleccionado = this.proyects[indice];
    this.editProyecto = {...proyectoSeleccionado}
    console.log("editando");
  }

  eliminarProyecto(indice:number):void {
    const proyecto = this.proyects[indice];
    this.proyectoService.eliminarProyecto(proyecto.idproyecto).subscribe(()=>{
      this.cargarProyectos();
    })
  }
}
