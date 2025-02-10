import { RouterModule, Routes } from '@angular/router';

import { TrabajadorDashboardComponent } from './trabajador/presentation/trabajadorDashboard/trabajador_dashboard.component';
import { NgModule } from '@angular/core';
import { JefeDashboardComponent } from './jefeproyecto/presentation/jefeDashboard/jefe_dashboard.component';

export const routes: Routes = [
    {path:'trabajador', component: TrabajadorDashboardComponent},
    {path:'jefe', component: JefeDashboardComponent},
    {path:'', redirectTo: "/trabajador",pathMatch:'full'},
    {path:'**', redirectTo: '/trabajador'}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}
