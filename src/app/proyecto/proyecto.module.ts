import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PDashboardComponent } from './p-dashboard/p-dashboard.component';
import { PFormComponent } from './p-form/p-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PDashboardComponent,
    PFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],exports:[
    PDashboardComponent
  ]
})
export class ProyectoModule { }
