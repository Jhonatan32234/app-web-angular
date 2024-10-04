import { RouterModule, Routes } from '@angular/router';
import { TDashboardComponent } from './trabajador/t-dashboard/t-dashboard.component';
import { JDashboardComponent } from './jefe/j-dashboard/j-dashboard.component';
import { PDashboardComponent } from './proyecto/p-dashboard/p-dashboard.component';
import { PaDashboardComponent } from './proyecto-asignado/pa-dashboard/pa-dashboard.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:'trabajador', component: TDashboardComponent},
    {path:'jefe', component: JDashboardComponent},
    {path:'proyecto', component: PDashboardComponent},
    {path:'proyectoAs', component: PaDashboardComponent},
    {path:'', redirectTo: "/trabajador",pathMatch:'full'},
    {path:'**', redirectTo: '/trabajador'}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}


