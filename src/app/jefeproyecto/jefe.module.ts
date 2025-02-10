import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JefeDashboardComponent } from './presentation/jefeDashboard/jefe_dashboard.component';
import { JefeFormComponent } from './presentation/jefeForm/jefe_form.component';


@NgModule({
  declarations: [
    JefeDashboardComponent,
    JefeFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  
  ],
  exports:[
    JefeDashboardComponent
  ],
  
})
export class JefeModule { }
