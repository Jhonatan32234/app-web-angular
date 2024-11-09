import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaDashboardComponent } from './pa-dashboard/pa-dashboard.component';
import { PaFormComponent } from './pa-form/pa-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PaDashboardComponent,
    PaFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],exports:[
    PaDashboardComponent
  ]
})
export class ProyectoAsignadoModule { }
