import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JDashboardComponent } from './j-dashboard/j-dashboard.component';
import { JFormComponent } from './j-form/j-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    JDashboardComponent,
    JFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],exports:[
    JDashboardComponent
  ]
})
export class JefeModule { }
