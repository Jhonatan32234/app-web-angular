import { Component, OnInit } from '@angular/core';
import { Iworker } from '../interface/iworker';
import { TrabajadorService } from '../service/trabajador.service';
@Component({
  selector: 'app-t-dashboard',
  templateUrl: './t-dashboard.component.html',
  styleUrl: './t-dashboard.component.css'
})
export class TDashboardComponent implements OnInit {
  trabajadores:Iworker[] = [];
  editTrabajador:Iworker | null = null;

  constructor(private trabajadorService:TrabajadorService){}
  
  ngOnInit(): void {
      this.cargarTrabajadores()
  }

  cargarTrabajadores():void{
    this.trabajadorService.getTrabajador().subscribe(trabajador =>{
      this.trabajadores = trabajador;
      })
  }


  agregarTrabajador(nuevoTrabajador: Iworker): void {
    if (this.editTrabajador) {
       this.trabajadorService.actualizacrTrabajador(nuevoTrabajador).subscribe(()=>{
      this.cargarTrabajadores();
    });
    this.editTrabajador = null;
    }else{
      this.trabajadorService.crearTrabajador(nuevoTrabajador).subscribe(()=>{
        this.cargarTrabajadores();
      })
    }
  }


  editarTrabajador(indice:number):void{
    const trabajadorSeleccionado = this.trabajadores[indice]
    this.editTrabajador = {...trabajadorSeleccionado}

  }

  eliminarTrabajador(indice: number): void {
    const trabajador = this.trabajadores[indice];
    this.trabajadorService.eliminarTrabajador(trabajador.idtrabajador).subscribe(()=>{
      this.cargarTrabajadores();
    })
  }
}
