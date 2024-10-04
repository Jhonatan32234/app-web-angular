import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TrabajadorModule } from './trabajador/trabajador.module';
import { BrowserModule } from '@angular/platform-browser';
import { JefeModule } from "./jefe/jefe.module";
import { ProyectoModule } from './proyecto/proyecto.module';
import { ProyectoAsignadoModule } from './proyecto-asignado/proyecto-asignado.module';
import { AppRoutingModule } from './app.routes';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TrabajadorModule,
    JefeModule,
    ProyectoModule,
    ProyectoAsignadoModule
],
  providers: [],
  bootstrap: [AppComponent]  
})
export class AppModule { }
