import { Component, OnInit } from '@angular/core';
import { Ichief } from '../interface/ichief';
import { JefeService } from '../service/jefe.service';
@Component({
  selector: 'app-j-dashboard',
  templateUrl: './j-dashboard.component.html',
  styleUrl: './j-dashboard.component.css'
})
export class JDashboardComponent implements OnInit {
  jefes:Ichief [] = [];
  editJefe:Ichief | null = null

  constructor(private jefeService:JefeService){}

ngOnInit(): void {
  this.cargarJefes();
}

cargarJefes():void{
  this.jefeService.getJefe().subscribe(jefe=>{
    this.jefes = jefe; 
  })
}

  agregarJefe(nuevojefe:Ichief):void{
   if (this.editJefe) {
    this.jefeService.actualizarJefe(nuevojefe).subscribe(()=>{
      this.cargarJefes();
    });
    this.editJefe = null;
   }else{
    this.jefeService.crearJefe(nuevojefe).subscribe(()=>{
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
    this.jefeService.eliminarJefe(jefe.idjefeproyecto).subscribe(()=>{
      this.cargarJefes();
    })
  }

}
