import { Component } from '@angular/core';
import { Ichief } from '../interface/ichief';
@Component({
  selector: 'app-j-dashboard',
  templateUrl: './j-dashboard.component.html',
  styleUrl: './j-dashboard.component.css'
})
export class JDashboardComponent {
  chiefs:Ichief [] = [];
  editJefe:Ichief | null = null

  agregarJefe(nuevojefe:Ichief):void{
    if (this.editJefe) {
      const index = this.chiefs.findIndex(chief => chief.id === this.editJefe?.id)
      if (index !== -1) {
        this.chiefs[index]={...nuevojefe};
      }
      this.editJefe = null;
    }else{
      nuevojefe.id= this.chiefs.length+1;
      this.chiefs.push(nuevojefe);
    }
    console.log(nuevojefe);
  }

  editarJefe(indice:number):void{
    const jefeSeleccionado = this.chiefs[indice];
    this.editJefe = {...jefeSeleccionado}
  }

  eliminarJefe(indice:number):void{
    this.chiefs.splice(indice,1)
  }

}
