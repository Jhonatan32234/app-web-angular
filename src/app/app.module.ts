import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TrabajadorModule } from './trabajador/trabajador.module';
import { BrowserModule } from '@angular/platform-browser';
import { JefeModule } from "./jefe/jefe.module";
import { ProyectoModule } from './proyecto/proyecto.module';
import { ProyectoAsignadoModule } from './proyecto-asignado/proyecto-asignado.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    
    BrowserModule,
    TrabajadorModule,
    JefeModule,
    ProyectoModule,
    ProyectoAsignadoModule
],
  providers: [],
  bootstrap: [AppComponent]  
})
export class AppModule { }
