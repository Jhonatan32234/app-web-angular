import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TrabajadorModule } from './trabajador/trabajador.module';
import { BrowserModule } from '@angular/platform-browser';
import { JefeModule } from './jefeproyecto/jefe.module';
import { AppRoutingModule } from './app.routes';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    TrabajadorModule,
    JefeModule
],
  providers: [],
  bootstrap: [AppComponent]  
})
export class AppModule { }
