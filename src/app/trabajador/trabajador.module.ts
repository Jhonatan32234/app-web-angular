import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TrabajadorDashboardComponent } from './presentation/trabajadorDashboard/trabajador_dashboard.component';
import { TrabajadorFormComponent } from './presentation/trabajadorForm/trabajador_form.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TrabajadorDashboardComponent,
    TrabajadorFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  
  ],
  exports:[
    TrabajadorDashboardComponent
  ],
  
})
export class TrabajadorModule { }
