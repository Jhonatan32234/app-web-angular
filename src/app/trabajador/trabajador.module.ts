import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TDashboardComponent } from './t-dashboard/t-dashboard.component';
import { TFormComponent } from './t-form/t-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TDashboardComponent,
    TFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  
  ],exports:[
    TDashboardComponent
  ]
})
export class TrabajadorModule { }
