import { Component, OnInit } from '@angular/core';
import { Ichief } from '../../domain/entities/chief';
import { JefeUseCase } from '../../application/useCase/chief_useCase';

@Component({
  selector: 'jefe-dashboard',
  templateUrl: './jefe_dashboard.component.html',
})
export class JefeDashboardComponent implements OnInit {
  jefes:Ichief [] = [];
  editJefe:Ichief | null = null

  constructor(private jefeUseCase:JefeUseCase){}

ngOnInit(): void {
  this.cargarJefes();
}

cargarJefes():void{
  this.jefeUseCase.getJefe().subscribe(jefe=>{
    this.jefes = jefe; 
  })
}

  agregarJefe(nuevojefe:Ichief):void{
   if (this.editJefe) {
    this.jefeUseCase.actualizarJefe(nuevojefe).subscribe(()=>{
      this.cargarJefes();
    });
    this.editJefe = null;
   }else{
    this.jefeUseCase.crearJefe(nuevojefe).subscribe(()=>{
      this.cargarJefes();
    })
   }
  }

  editarJefe(indice:number):void{
    const jefeSeleccionado = this.jefes[indice];
    this.editJefe = {...jefeSeleccionado}
  }

  eliminarJefe(indice:number):void{  
    const jefe = this.jefes[indice];
    this.jefeUseCase.eliminarJefe(jefe.idjefeproyecto).subscribe(()=>{
      this.cargarJefes();
    })
  }

}
