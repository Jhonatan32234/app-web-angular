import { Component } from '@angular/core';
import { Iproyect } from '../interface/iproyect';

@Component({
  selector: 'app-p-dashboard',
  templateUrl: './p-dashboard.component.html',
  styleUrl: './p-dashboard.component.css'
})
export class PDashboardComponent {
  proyects:Iproyect[]= [];

  agregarProyecto(nuevoProyecto:Iproyect): void{
    this.proyects.push(nuevoProyecto)
    console.log(nuevoProyecto);
  }

}
